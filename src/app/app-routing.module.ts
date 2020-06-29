import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './components/category/category.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AboutComponent } from './components/about/about.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { AuthGuardService as AuthGuard } from './auth/auth-guard.service';


const routes: Routes = [
  { path: 'home', component: HomepageComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo:"/home", pathMatch:"full"},
  { path: 'category', component: CategoryComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'about', component: AboutComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'add_post', component: AddPostComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
