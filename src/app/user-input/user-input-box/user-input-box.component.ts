import { Component, model,input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input-box',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input-box.component.html',
  styleUrl: './user-input-box.component.css'
})
export class UserInputBoxComponent {
  inputData = model.required<number>()
  labelName = input.required<string>()
}
