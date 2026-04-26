import { ChangeDetectionStrategy, Component, HostListener, input, output, signal } from '@angular/core';
import { NavItem, ThemeMode } from '../../data/portfolio-data';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {
  readonly brandName = input.required<string>();
  readonly brandTitle = input.required<string>();
  readonly navItems = input.required<NavItem[]>();
  readonly githubUrl = input.required<string>();
  readonly theme = input.required<ThemeMode>();
  readonly themeToggled = output<void>();

  protected readonly menuOpen = signal(false);
  protected readonly menuId = 'primary-navigation-mobile';
  protected scrolled = false;

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled = window.scrollY > 16;
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.closeMenu();
  }

  protected toggleMenu(): void {
    this.menuOpen.update((value) => !value);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }
}
