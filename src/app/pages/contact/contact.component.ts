import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [ ReactiveFormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export default class ContactComponent { 
  userMassageForm!: FormGroup;
  private fb: FormBuilder = inject(FormBuilder);
  
  constructor(){
    this.userMassageForm =  this.fb.group({
      name: ["", Validators.required],
      email: ["", Validators.required],
      phoneNumber: ["", Validators.required],
      massage: ["", Validators.required],
    })
  }

  onSubmit(){
    if(this.userMassageForm.invalid){
      alert("❌Bo'sh joylarni toldiring!")
      return;
    }

    console.log( this.userMassageForm.value);

    alert('✅ Ваш код успешно отправлен!');
    this.userMassageForm.reset();
  }
}
