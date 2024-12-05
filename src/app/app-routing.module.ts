import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CredentialFormComponent} from './credential-form/credential-form.component';
import {CredentialsComponent} from './credentials/credentials.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {authGuard} from './auth.guard';

const routes: Routes = [
  { path: '', component: CredentialsComponent, canActivate: [authGuard] },
  { path: 'form', component: CredentialFormComponent, canActivate: [authGuard] },
  { path: 'credential-form', component: CredentialFormComponent, canActivate: [authGuard] },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
