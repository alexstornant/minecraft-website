import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private httpClient: HttpClient) { }

  public getTestServer() {
      const url = 'https://api.mcsrvstat.us/2/mc.hypixel.net';
      return this.httpClient.get(url);
  }


}
