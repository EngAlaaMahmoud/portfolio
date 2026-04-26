import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ContactData } from '../../data/portfolio-data';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-contact',
  imports: [RevealDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent {
  readonly contact = input.required<ContactData>();
}
