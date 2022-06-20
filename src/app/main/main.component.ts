import { Component, OnInit } from '@angular/core';
import {MainService} from "../services/main/main.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private mainService: MainService) { }

  server: any;

  ngOnInit(): void {
    this.mainService.getTestServer().subscribe(data => this.server = data);
  }

  onClick() {
    console.log(this.server);
    console.log('players active: ', this.server.players.online);
    console.log('max players: ', this.server.players.max);
  }
}
