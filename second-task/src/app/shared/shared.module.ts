import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { LoginComponent } from '../login/login.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent], // Declarαtion of LoginComponent here
  imports: [
    CommonModule,
    IonicModule,
    TranslateModule,// Import necessary modules here
    FormsModule
  ],
  exports: [LoginComponent] // Export LoginComponent for use in other modules
})
export class SharedModule { }
