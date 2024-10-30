import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-side-nav-item',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './side-nav-item.component.html',
  styleUrl: './side-nav-item.component.scss',
})
export class SideNavItemComponent {
  @Input('title') title!: string;
  @Input('icon') icon!: string;
  @Input('routerLink') routerLink!: string;
}
