import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Boat } from './boat';

@Injectable()
export class BoatService {

    private headers = new Headers({'Content-Type': 'application/json'});
    private boatUrl = "http://localhost:3000/boats";

    constructor(private http: Http) { }

    getBoats(): Promise<Boat[]> {
        return this.http.get(this.boatUrl)
            .toPromise()
            .then(response => response.json() as Boat[])
            .catch(BoatService.handleError);
    }

    update(boat: Boat): Promise<Boat> {
        const url = `${this.boatUrl}/${boat.id}`;
        return this.http
            .put(url, JSON.stringify(boat), {headers: this.headers})
            .toPromise()
            .then(() => alert(boat.name+" is saved."))
            .catch(BoatService.handleError);
    }

    delete(id: number): Promise<void> {
        const url = `${this.boatUrl}/${id}`;
        if(confirm("Do you really want to delete this boat?")){
            return this.http.delete(url, {headers: this.headers})
                .toPromise()
                .then(() => null)
                .catch(BoatService.handleError);
        }
        else {
            alert("It is cancelled. The boat is safe.");
        }

    }

    create(name: string): Promise<void> {
        return this.http
            .post(this.boatUrl, JSON.stringify({name: name}), {headers: this.headers})
            .toPromise()
            .then(res => res.json() as Boat)
            .catch(BoatService.handleError);
    }

    private static handleError(error: any): Promise<any> {
        console.error('Cannot read data from server', error);
        return Promise.reject(error.message || error);
    }
}