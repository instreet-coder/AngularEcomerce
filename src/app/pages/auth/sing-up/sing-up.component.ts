import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sing-up',
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './sing-up.component.html',
  styleUrl: './sing-up.component.scss'
})
export default class SingUpComponent {
  registerForm!: FormGroup;
  private fb:FormBuilder = inject(FormBuilder);
  private authService: AuthService = inject(AuthService);
  private router: Router = inject(Router);

  constructor(){
    this.registerForm = this.fb.group({
      fullName: ["", Validators.required],
      email: ["", Validators.required],
      password: ["", Validators.required],
    })
  }

  onSubmitt(){
    this.authService.registerUser(this.registerForm.value);
    
    this.router.navigateByUrl("/home")
  }
}
