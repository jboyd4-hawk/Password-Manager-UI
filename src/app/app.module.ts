import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CredentialsComponent } from './credentials/credentials.component';
import { CredentialItemComponent } from './credential-item/credential-item.component';
import { CredentialFormComponent} from './credential-form/credential-form.component';
import {provideHttpClient, withInterceptors} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import {tokenInterceptor} from './token.interceptor';



@NgModule({
  declarations: [
    AppComponent,
    CredentialsComponent,
    CredentialItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CredentialFormComponent,
    RegisterComponent,
    LoginComponent,
  ],
  providers: [provideHttpClient(withInterceptors([tokenInterceptor]))],
  bootstrap: [AppComponent]
})
export class AppModule { }
