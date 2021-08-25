import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [CommonModule, FormsModule, UserRoutingModule],
})
export class UserModule {}
