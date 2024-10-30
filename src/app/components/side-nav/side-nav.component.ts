import { Component } from '@angular/core';
import { SideNavItemComponent } from '../side-nav-item/side-nav-item.component';
import { CommonModule } from '@angular/common';
import { MENU_ITEMS } from '../../core/constants/menu-items';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [CommonModule, SideNavItemComponent],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss',
})
export class SideNavComponent {
  menuItems = MENU_ITEMS;
}
