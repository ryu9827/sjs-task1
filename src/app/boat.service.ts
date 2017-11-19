import { Injectable } from '@angular/core';
import { Boat } from './boat';
import { BOATS } from './mock-boats';

@Injectable()
export class BoatService {
    getBoats(): Promise<Boat[]> {
        return Promise.resolve(BOATS);
    }
}