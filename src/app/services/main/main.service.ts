import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private httpClient: HttpClient) { }

  public getTestServer(url: string) {
      return this.httpClient.get('https://api.mcsrvstat.us/2/' + url);
  }


}
