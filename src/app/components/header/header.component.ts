import { Component, NgZone, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { MENU_ITEMS } from '../../core/constants/menu-items';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, NgbDropdownModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  title = '';
  menuItems = MENU_ITEMS;

  constructor(private router: Router, private zone: NgZone) {}

  ngOnInit(): void {
    setInterval(() => {
      this.zone.runTask(() => {
        let url = this.router.url.replaceAll('/', '');
        if (url.length == 0) {
          return;
        }

        url = url[0].toUpperCase() + url.substring(1).toLowerCase();
        if (url != this.title) {
          this.title = url;
        }
      });
    }, 100);
  }

  navigate(link: string) {
    this.router.navigate([link]);
  }
}
