import { Injectable } from '@angular/core';
import { WebService } from './web.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  constructor(private webService: WebService) { }
  getDevices(): Observable<any> {
    const endpoint = '/api/v1/devices';
    return this.webService.get(endpoint);
  }

}
