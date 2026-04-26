import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
  readonly name = input.required<string>();
  readonly title = input.required<string>();
  readonly year = input.required<number>();
  readonly githubUrl = input.required<string>();
}
