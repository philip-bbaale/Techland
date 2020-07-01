import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  currentUser: User;

  constructor(
    private router: Router,
    private auth :AuthService
  ) { 
    this.auth.currentUser.subscribe(x => this.currentUser = x);
    
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }

}
