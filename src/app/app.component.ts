import { Component, OnInit } from '@angular/core';
import {Boat} from "./boat";
import { BoatService } from "./boat.service";

@Component({
    selector: 'app-root',
    template: `
  <div class="container">
    <h1>{{title}}</h1>
    <div *ngFor="let boat of boats">
      <div class="card" [class.selected]="boat === selectedBoat" (click)="onSelect(boat)" style="width: 15rem;cursor: pointer">
        <img class="card-img-top" src="{{boat.photo}}" alt="Card image cap" >
        <div class="card-block">
          <p class="card-title text-center">{{boat.name}}</p>          
        </div>
      </div>      
    </div>
    <boat-detail [boat]="selectedBoat"></boat-detail>
  </div>
    `,
    providers:[BoatService]
})
export class AppComponent implements OnInit{
    title = 'Dockyards Boat Repair';
    boats : Boat[];
    selectedBoat: Boat;

    constructor(private BoatService: BoatService){}

    getBoats(): void{
        this.BoatService.getBoats().then(boats => this.boats = boats );
    }

    ngOnInit(): void {
        this.getBoats();
    }

    onSelect(boat: Boat): void {
        this.selectedBoat = boat;
    }
}