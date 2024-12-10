import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { LoginComponent } from '../login/login.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { DeviceManagementComponent } from '../device-management/device-management.component';

@NgModule({
  declarations: [LoginComponent,
    DeviceManagementComponent],
  imports: [
    CommonModule,
    IonicModule,
    TranslateModule,// Import necessary modules here
    FormsModule
  ],
  exports: [LoginComponent,
    DeviceManagementComponent
  ]
})
export class SharedModule { }
