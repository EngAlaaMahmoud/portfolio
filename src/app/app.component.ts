import { ChangeDetectionStrategy, Component, DOCUMENT, effect, inject, signal } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ContactComponent } from './components/contact/contact.component';
import { EducationComponent } from './components/education/education.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroComponent } from './components/hero/hero.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ThemeMode, portfolioData } from './data/portfolio-data';

const THEME_STORAGE_KEY = 'portfolio-theme';

@Component({
  selector: 'app-root',
  imports: [
    NavbarComponent,
    HeroComponent,
    SkillsComponent,
    ExperienceComponent,
    ProjectsComponent,
    EducationComponent,
    ContactComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  readonly portfolio = portfolioData;
  readonly currentYear = new Date().getFullYear();
  readonly theme = signal<ThemeMode>(this.getInitialTheme());

  private readonly document = inject(DOCUMENT);
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  constructor() {
    this.title.setTitle(this.portfolio.seo.title);
    this.meta.updateTag({ name: 'description', content: this.portfolio.seo.description });

    effect(() => {
      const activeTheme = this.theme();
      const root = this.document.documentElement;

      root.setAttribute('data-theme', activeTheme);
      root.style.colorScheme = activeTheme;

      if (typeof window !== 'undefined') {
        window.localStorage.setItem(THEME_STORAGE_KEY, activeTheme);
      }

      this.meta.updateTag({
        name: 'theme-color',
        content: activeTheme === 'dark' ? '#020617' : '#f4f7fb'
      });
    });
  }

  toggleTheme(): void {
    this.theme.update((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'));
  }

  private getInitialTheme(): ThemeMode {
    if (typeof window === 'undefined') {
      return 'dark';
    }

    const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);

    if (storedTheme === 'light' || storedTheme === 'dark') {
      return storedTheme;
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
}
