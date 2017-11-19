import { Component, OnInit } from '@angular/core';
import { Boat } from "./boat";
import { BoatService } from "./boat.service";

@Component({
    selector: 'app-root',
    template: `
      <div class="container">
        <h1>{{title}}</h1>        
          <div class="card-deck">
            <div *ngFor="let boat of boats" class="col-4">
              <div class="card" [class.selected]="boat === selectedBoat" (click)="onSelect(boat)" style="cursor: pointer">
                <img class="card-img-top" src="{{boat.photo}}" alt="Card image cap" >
                <div class="card-block">
                  <p class="card-title text-center">{{boat.name}}</p>          
                </div>
              </div>      
            </div>            
            <div class="col-4">
              <div class="card" style="cursor: pointer">
                <img class="card-img-top" src="http://via.placeholder.com/350x150?text=New+Boat" alt="Card image cap" >
                <div class="card-block">
                  <p class="card-title text-center">Create a New Boat</p>
                </div>
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