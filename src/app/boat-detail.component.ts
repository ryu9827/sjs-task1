import { Component, Input } from '@angular/core';
import {Boat} from "./boat";


@Component({
    selector: 'boat-detail',
    template: `
      <div *ngIf="boat">
        <h2>{{boat.name}} details!</h2>
        <div><label>id: </label>{{boat.id}}</div>
        <div>
          <label>name: </label>
          <input [(ngModel)]="boat.name" placeholder="name"/>
        </div>
      </div>
    `
})
export class BoatDetailComponent {
    @Input() boat:Boat;
}