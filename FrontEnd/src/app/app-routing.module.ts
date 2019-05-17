import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoggedInGuard } from './access-guards/logged-in.guard';
import { LoggedOutGuard } from './access-guards/logged-out.guard';
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ManageArticlesComponent } from './manage-articles/manage-articles.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [LoggedOutGuard]
  },
  {
    path: 'home',
    component: HomePageComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'manage-articles',
    component: ManageArticlesComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'user-profile',
    component: UserProfileComponent,
    canActivate: [LoggedInGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
