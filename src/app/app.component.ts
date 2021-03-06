import { Component, OnInit } from '@angular/core';
import { Router, Routes, ROUTER_DIRECTIVES } from '@angular/router';
import { SigninComponent } from './users/signin/signin.component';
import { SignupComponent } from './users/signup/signup.component';
import { HomeComponent } from './home/home.component';

@Component({
  selector: `ngconf-app`,
  templateUrl: `app/app.component.html`,
  directives: [ROUTER_DIRECTIVES],
  providers: []
})
@Routes([
  { path: '/', component: HomeComponent },
  { path: '/signin', component: SigninComponent },
  { path: '/signup', component: SignupComponent }
])
export class AppComponent implements OnInit {
  constructor(private router: Router) {
    
  }

  ngOnInit() {
    this.router.navigate(['/']);
  }
}