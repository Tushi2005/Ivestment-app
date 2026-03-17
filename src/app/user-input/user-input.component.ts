import { Component } from '@angular/core';
import { UserInputBoxComponent } from './user-input-box/user-input-box.component';
import { Investment } from '../investment.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [UserInputBoxComponent],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  investment: Investment = {
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0
  };

  onSubmit() {
    
    console.log('Beküldött adatok:', this.investment);
  }
}