import { Component, Input, OnInit } from '@angular/core';
import { Boat} from "./boat";
import { Worker } from "./worker";
import { WorkerService } from "./worker.service";
import { BoatService } from "./boat.service";


@Component({
    selector: 'boat-detail',
    template: `
      <div *ngIf="boat"><br><br>       
        <h2 class="text-center">Details of {{boat.name}} </h2>
        <div><label>Boat id: {{boat.id}}</label></div>
       
        <div class="form-group row">
          <label for="name" class="col-2 col-offset-2 col-form-label">Name: </label>
          <div class="col-4">
            <input [(ngModel)]="boat.name" class="form-control" type="text" value="{{boat.name}}" id="name" placeholder="name">
          </div>
        </div>  
       
        <div class="form-group row">
          <label for="worker" class="col-2">Worker Name: </label>
          <div class="col-4">
            <select class="custom-select col-2" id="worker">
              <option *ngFor="let worker of workers" value="{{worker.id}}">{{worker.name}}</option> 
            </select>
          </div>
        </div>
       
        <div class="form-group row">
          <label for="type" class="col-2 col-offset-2 col-form-label">type: </label>
          <div class="col-4">
            <input [(ngModel)]="boat.type" class="form-control" type="text" value="{{boat.type}}" id="type" placeholder="type">
          </div>
        </div>
       
        <div class="form-group row">
          <label for="photo" class="col-2 col-offset-2 col-form-label">photo: </label>
          <div class="col-4">
            <input [(ngModel)]="boat.photo" class="form-control" type="text" value="{{boat.photo}}" id="photo" placeholder="photo URL">
          </div>
        </div>
       
        <div class="form-group row">
          <label for="length" class="col-2 col-offset-2 col-form-label">length: </label>
          <div class="col-4">
            <input [(ngModel)]="boat.length" class="form-control" type="text" value="{{boat.length}}" id="length" placeholder="length">
          </div>
        </div>
       
        <div class="form-group row">
          <label for="description" class="col-2 col-offset-2 col-form-label">description: </label>
          <div class="col-4">
            <input [(ngModel)]="boat.work_description" class="form-control" type="text" value="{{boat.work_description}}" id="description" placeholder="description">
          </div>
        </div>
       
        <div class="form-group row">
          <label for="arrival_date" class="col-2 col-offset-2 col-form-label">arrival date: </label>
          <div class="col-4">
            <input [(ngModel)]="boat.arrival_date" class="form-control" type="datetime-local" value="{{boat.arrival_date}}" id="arrival_date" placeholder="arrival date">
          </div>
        </div>
       
        <div class="form-group row">
          <label for="delivery_date" class="col-2 col-offset-2 col-form-label">delivery date: </label>
          <div class="col-4">
            <input [(ngModel)]="boat.delivery_date" class="form-control" type="datetime-local" value="{{boat.delivery_date}}" id="delivery_date" placeholder="delivery date">
          </div>
        </div>
       
        <div class="form-group row">
          <label for="status" class="col-2 col-offset-2 col-form-label">status: </label>
          <div class="col-4">
            <input [(ngModel)]="boat.status" class="form-control" type="text" value="{{boat.status}}" id="status" placeholder="status">
          </div>
        </div>
        
        <button (click)="save()" class="btn btn-primary col-2">Save</button>
        <button (click)="delete(boat); $event.stopPropagation()" class="btn btn-danger col-2">Delete</button>        
      </div>
    `,
    providers:[ BoatService, WorkerService ]
})
export class BoatDetailComponent implements OnInit{

    @Input() boat:Boat;
    workers : Worker[];
    boats : Boat[];
    selectedBoat : Boat;

    constructor(
        private BoatService: BoatService,
        private WorkerService: WorkerService
    ){}


    getWorker(): void {
        this.WorkerService.getWorker()
            .then(workers => this.workers = workers );
    }

    ngOnInit(): void {
        this.getWorker();
    }

    save(): void {
        this.BoatService.update(this.boat)
            .then(()=>this.BoatService.getBoats());
        location.reload(true);
    }

    delete(boat: Boat): void {
        this.BoatService
            .delete(boat.id)
            .then(() => {
                this.BoatService.getBoats();
                this.boats = this.boats.filter(h => h !== boat);
                if (this.selectedBoat === boat) { this.selectedBoat = null; }
            });
        location.reload(true);
    }
}