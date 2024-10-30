import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-investment-card',
  standalone: true,
  imports: [],
  templateUrl: './investment-card.component.html',
  styleUrl: './investment-card.component.scss',
})
export class InvestmentCardComponent {
  @Input('title') title!: string;
  @Input('category') category!: string;
  @Input('icon') icon!: string;
  @Input('color') color!: string;
  @Input('value') value!: number;
  @Input('return') return!: number;
}
