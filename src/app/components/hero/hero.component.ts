import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { HeroAction, HeroData, HeroHighlight, ProfileData } from '../../data/portfolio-data';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-hero',
  imports: [RevealDirective],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroComponent {
  readonly hero = input.required<HeroData>();
  readonly profile = input.required<ProfileData>();
  readonly highlights = input.required<HeroHighlight[]>();

  protected actionClass(variant: HeroAction['variant']): string {
    switch (variant) {
      case 'primary':
        return 'hero-action hero-action-primary';
      case 'secondary':
        return 'hero-action hero-action-secondary';
      default:
        return 'hero-action hero-action-ghost';
    }
  }
}
