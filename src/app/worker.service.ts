import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import {Http} from "@angular/http";
import { Worker } from './worker';

@Injectable()
export class WorkerService {

    private workerUrl = "http://localhost:3000/workers";

    constructor(private http: Http) { }

    getWorker(): Promise<Worker[]> {
        return this.http.get(this.workerUrl)
            .toPromise()
            .then(response => response.json() as Worker[])
            .catch(WorkerService.handleError);
    }

    private static handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}