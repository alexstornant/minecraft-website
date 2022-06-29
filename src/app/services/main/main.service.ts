import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private httpClient: HttpClient) { }

  baseUrl: string = 'https://api.mcsrvstat.us/2/';

  getServer(url: string) {
    if (url){
      return this.httpClient.get<any>(this.baseUrl + url);
    }
    else {
      return of();
    }
  }
}
