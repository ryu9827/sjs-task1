import { Component, OnInit } from '@angular/core';
import {Boat} from "./boat";
import { BoatService } from "./boat.service";

@Component({
    selector: 'app-root',
    template: `
    <h1>{{title}}</h1>
<h2>My Boats</h2>
<ul class="boats">
<li *ngFor="let boat of boats"
    [class.selected]="boat === selectedBoat"
(click)="onSelect(boat)">
<span class="badge">{{boat.id}}</span> {{boat.name}}
</li>
</ul>
<boat-detail [boat]="selectedBoat"></boat-detail>
    `,
    providers:[BoatService]
})
export class AppComponent implements OnInit{
    title = 'Dockyards';
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