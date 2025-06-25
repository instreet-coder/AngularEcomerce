import { Component, inject } from '@angular/core';
import { User } from '../../interfaces/user.intrface';
import { AuthService } from '../auth/auth.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-account',
  imports: [ CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss'
})
export default class AccountComponent {
  private authService: AuthService = inject(AuthService);
  user: BehaviorSubject<User | null> = this.authService.user;
  userEdirForm!: FormGroup;
  fb: FormBuilder = inject(FormBuilder);

  constructor(){
    this.userEdirForm = this.fb.group({
      firstName: [this.user.value?.firstName || "", Validators.required],
      lastName: [this.user.value?.lastName || "", Validators.required],
      email: [this.user.value?.email || "", Validators.required],
      address: [this.user.value?.address || "", Validators.required],
      currentPassword: [this.user.value?.password || "", Validators.required],
      newPassword: ["", Validators.required],
      confirmPassword: ["", Validators.required],
    })
  }

  onSubmit(){
    if(this.userEdirForm.invalid){
      alert("Bo'sh joylarni toldiring!")
      return;
    }

    let userForm = this.userEdirForm.value;

    if(!(this.user.value?.password===userForm.currentPassword)){
      alert("Oldingi parolingiz bilan mos emas CurrentPassword!");
      return;
    }
    if(!(userForm.newPassword===userForm.confirmPassword)){
      alert("Yangi parol bilan tasfidlash paroli mos emas!");
      return;
    }


    let userProfile= {
      firstName: userForm.firstName,
      lastName: userForm.lastName,
      email: userForm.email,
      address: userForm.address,
      password: userForm.password,
    }

    this.authService.updateUser(userProfile);
    this.userEdirForm.reset();
  }


  onCancel(){
    this.userEdirForm.reset();
  }
}
