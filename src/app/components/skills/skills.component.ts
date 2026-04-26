import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { SkillGroup } from '../../data/portfolio-data';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-skills',
  imports: [RevealDirective],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillsComponent {
  readonly skills = input.required<SkillGroup[]>();
}
