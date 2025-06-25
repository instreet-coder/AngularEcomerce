import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { User } from '../../interfaces/user.intrface';
import { AuthService } from '../../pages/auth/auth.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  private authService: AuthService = inject(AuthService);
  user: Observable<User | null> = this.authService.user.asObservable();
  viewUserModal: boolean = false;

  userModal(){
    this.viewUserModal = !this.viewUserModal;
  }

}
