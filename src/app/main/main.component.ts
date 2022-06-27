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
    this.mainService.getServer('mc.hypixel.net').subscribe(data => this.hypixel = data);
    this.mainService.getServer('play.pixelmonrealms.com').subscribe(data => this.pixelmon = data);
    this.mainService.getServer('play.cubecraft.net').subscribe(data => this.cubecraft = data);
  }

  searchIP(value: string): void {
    this.mainService.getServer(value).subscribe(data => this.server = data);
  }

}
