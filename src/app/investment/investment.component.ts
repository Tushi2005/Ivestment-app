import { Component, inject } from '@angular/core';
import { InvestmentService } from './investment.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-investment',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment.component.html',
  styleUrl: './investment.component.css'
})
export class InvestmentComponent {
  public investmentService = inject(InvestmentService)
  results = this.investmentService.resultsData
  isCalculated = this.investmentService.isCalculated
}
