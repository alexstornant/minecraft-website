import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private httpClient: HttpClient) { }

  baseUrl: string = 'https://api.mcsrvstat.us/2/';

  getServer(url: string) {
      return this.httpClient.get<any>(this.baseUrl + url);
  }

}
