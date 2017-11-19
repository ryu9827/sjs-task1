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
        <div>
          <label>type: </label>
          <input [(ngModel)]="boat.type" placeholder="type"/>
        </div>
        <div>
          <label>photo: </label>
          <input [(ngModel)]="boat.photo" placeholder="photo"/>
        </div>
        <div>
          <label>length: </label>
          <input [(ngModel)]="boat.length" placeholder="length"/>
        </div>
        <div>
          <label>description: </label>
          <input [(ngModel)]="boat.work_description" placeholder="description"/>
        </div>
        <div>
          <label>arrival date: </label>
          <input [(ngModel)]="boat.arrival_date" placeholder="arrival date"/>
        </div>
        <div>
          <label>delivery date: </label>
          <input [(ngModel)]="boat.delivery_date" placeholder="delivery date"/>
        </div>
        <div>
          <label>status: </label>
          <input [(ngModel)]="boat.status" placeholder="status"/>
        </div>
        <button class="btn btn-primary">save</button>
      </div>
    `
})
export class BoatDetailComponent {
    @Input() boat:Boat;
}