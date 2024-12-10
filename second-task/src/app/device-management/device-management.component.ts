import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../services/device.service';

@Component({
  selector: 'app-device-management',
  templateUrl: './device-management.component.html',
  styleUrls: ['./device-management.component.scss'],
})
export class DeviceManagementComponent implements OnInit {

  devices: any[] = [];
  loading: boolean = false;

  constructor(private deviceService: DeviceService) { }

  ngOnInit(): void {
    this.fetchDevices();
  }

  fetchDevices(): void {
    this.deviceService.getDevices().subscribe(
      (response) => {
        if (response.status === 200) {
          this.devices = response.data;
          console.log(this.devices);
        }
      },
      (error) => {
        console.error('Error fetching devices:', error);
        this.loading = false;
      }
    );
  }
}
