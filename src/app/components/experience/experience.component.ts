import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ExperienceItem, SectionContent } from '../../data/portfolio-data';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-experience',
  imports: [RevealDirective],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExperienceComponent {
  readonly section = input.required<SectionContent>();
  readonly experiences = input.required<ExperienceItem[]>();
}
