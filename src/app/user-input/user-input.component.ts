import { Component, inject } from '@angular/core';
import { UserInputBoxComponent } from './user-input-box/user-input-box.component';
import { Investment } from '../investment.model';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [UserInputBoxComponent],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  private investmentService = inject(InvestmentService);

  investment: Investment = {
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 5,
    duration: 10
  };

  onSubmit() {
    const results = this.investmentService.calculateInvestmentResults(this.investment);
    console.log('Kiszámolt eredmények:', results);
  }
}