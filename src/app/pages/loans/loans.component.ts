import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-loans',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loans.component.html',
  styleUrl: './loans.component.scss',
})
export class LoansComponent {
  data = [
    {
      no: '01.',
      money: '$100,000',
      repay: '$40,500',
      duration: '8 Months',
      interest: '12%',
      installment: '$2,000 / month',
    },
    {
      no: '02.',
      money: '$500,000',
      repay: '$250,000',
      duration: '36 Months',
      interest: '10%',
      installment: '$8,000 / month',
    },
    {
      no: '03.',
      money: '$900,000',
      repay: '$40,000',
      duration: '12 Months',
      interest: '12%',
      installment: '$5,000 / month',
    },
    {
      no: '04.',
      money: '$50,000',
      repay: '$40,500',
      duration: '25 Months',
      interest: '5%',
      installment: '$2,000 / month',
    },
    {
      no: '05.',
      money: '$50,000',
      repay: '$40,500',
      duration: '5 Months',
      interest: '16%',
      installment: '$10,000 / month',
    },
    {
      no: '06.',
      money: '$80,000',
      repay: '$25,500',
      duration: '14 Months',
      interest: '8%',
      installment: '$2,000 / month',
    },
    {
      no: '07.',
      money: '$12,000',
      repay: '$5,500',
      duration: '9 Months',
      interest: '13%',
      installment: '$500 / month',
    },
    {
      no: '08.',
      money: '$160,000',
      repay: '$100,800',
      duration: '3 Months',
      interest: '12%',
      installment: '$900 / month',
    },
  ];

  total = {
    no: 'Total',
    money: '$125,000',
    repay: '$750,000',
    duration: '',
    interest: '',
    installment: '$50,000 / month',
  };
}
