import { Component, inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  imports: [ReactiveFormsModule],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.scss'
})
export default class LogInComponent {
  logInForm!: FormGroup;
  private fb:FormBuilder = inject(FormBuilder)

  constructor(){
    this.logInForm = this.fb.group({
      email: ["", Validators.required],
      password: ["", Validators.required],
    })
  }

  onSubmit(){
    console.log(this.logInForm.value);
    
  }
}