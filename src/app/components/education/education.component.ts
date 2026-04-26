import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { EducationItem } from '../../data/portfolio-data';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-education',
  imports: [RevealDirective],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EducationComponent {
  readonly education = input.required<EducationItem>();
}
