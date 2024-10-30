import { Component } from '@angular/core';
import { StatsCardComponent } from '../../components/stats-card/stats-card.component';
import { CommonModule } from '@angular/common';
import { InvestmentsChartComponent } from '../../components/investments-chart/investments-chart.component';
import { RevenueChartComponent } from '../../components/revenue-chart/revenue-chart.component';
import { InvestmentCardComponent } from '../../components/investment-card/investment-card.component';
import { StockTableComponent } from '../../components/stock-table/stock-table.component';

@Component({
  selector: 'app-investments',
  standalone: true,
  imports: [
    CommonModule,
    StatsCardComponent,
    InvestmentsChartComponent,
    RevenueChartComponent,
    InvestmentCardComponent,
    StockTableComponent,
  ],
  templateUrl: './investments.component.html',
  styleUrl: './investments.component.scss',
})
export class InvestmentsComponent {
  stats: any[] = [
    {
      title: 'Total Invested Amount',
      value: '$150,000',
      icon: 'assets/icons/money-bag.svg',
      color: '#DCFAF8',
    },
    {
      title: 'Number of Investments',
      value: '1,250',
      icon: 'assets/icons/pie-chart.svg',
      color: '#FFE0EB',
    },
    {
      title: 'Rate of Return',
      value: '+5.80%',
      icon: 'assets/icons/repeat.svg',
      color: '#E7EDFF',
    },
  ];

  investments = [
    {
      title: 'Apple Store',
      category: 'E-commerce, Marketplace',
      icon: 'assets/icons/apple.svg',
      value: 54000,
      return: 16,
      color: '#FFE0EB',
    },
    {
      title: 'Samsung Mobile',
      category: 'E-commerce, Marketplace',
      icon: 'assets/icons/google.svg',
      value: 25300,
      return: -4,
      color: '#E7EDFF',
    },
    {
      title: 'Tesla Motors',
      category: 'Electric Vehicles',
      icon: 'assets/icons/tesla.svg',
      value: 8200,
      return: 25,
      color: '#FFF5D9',
    },
  ];
}
