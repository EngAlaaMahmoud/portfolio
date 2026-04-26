import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ProjectAction, ProjectItem } from '../../data/portfolio-data';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-projects',
  imports: [RevealDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsComponent {
  readonly projects = input.required<ProjectItem[]>();

  protected actionClass(variant: ProjectAction['variant']): string {
    return variant === 'primary' ? 'btn-primary' : 'btn-secondary';
  }
}
