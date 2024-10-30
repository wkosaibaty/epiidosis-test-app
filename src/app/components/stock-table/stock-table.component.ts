import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-stock-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stock-table.component.html',
  styleUrl: './stock-table.component.scss',
})
export class StockTableComponent {
  data = [
    {
      no: '01.',
      name: 'Trivago',
      price: 520,
      return: 5,
    },
    {
      no: '02.',
      name: 'Canon',
      price: 480,
      return: 10,
    },
    {
      no: '03.',
      name: 'Uber Food',
      price: 350,
      return: -3,
    },
    {
      no: '04.',
      name: 'Nokia',
      price: 940,
      return: 2,
    },
    {
      no: '05.',
      name: 'Tiktok',
      price: 670,
      return: -12,
    },
  ];
}
