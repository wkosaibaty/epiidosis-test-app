import { Routes } from '@angular/router';
import { InvestmentsComponent } from './pages/investments/investments.component';
import { LoansComponent } from './pages/loans/loans.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'investments' },
  { path: 'investments', component: InvestmentsComponent },
  { path: 'loans', component: LoansComponent },
];
