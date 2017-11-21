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
                <img class="card-img-top" src="http://via.placeholder.com/350x150/51A143" alt="Card image cap" >
                <div class="card-block">
                 <p class="card-title text-center"><b>{{boat.name}}</b></p>          
                </div>
              </div>      
            </div>
           
            <div class="col-4">
              <div class="card" style="cursor: pointer">
                <img class="card-img-top" (click)="add(boatName.value); boatName.value=''"  src="http://via.placeholder.com/350x150/02EAFF?text=Add+New+Boat" alt="Card image cap" >
                <div class="card-block">                  
                  <input #boatName class="form-control text-center" type="text" id="newBoat" placeholder="New Boat Name">                                  	               
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
        this.BoatService.getBoats()
            .then(boats => this.boats = boats);
    }

    add(name: string): void {
        name = name.trim();
        if (!name) {
            alert("Please enter boat name first.");
            return;
        }
        this.BoatService.create(name)
            .then(boat => {
                this.selectedBoat = null;
            });
        location.reload(true);
    }

    ngOnInit(): void {
        this.getBoats();
    }

    onSelect(boat: Boat): void {
        this.selectedBoat = boat;
    }
}