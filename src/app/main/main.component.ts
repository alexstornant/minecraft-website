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
  hypixel: any;
  pixelmon: any;
  cubecraft: any;

  ngOnInit(): void {
    this.mainService.getTestServer('mc.hypixel.net').subscribe(data => this.hypixel = data);
    this.mainService.getTestServer('play.pixelmonrealms.com').subscribe(data => this.pixelmon = data);
    this.mainService.getTestServer('play.cubecraft.net').subscribe(data => this.cubecraft = data);
  }

}
