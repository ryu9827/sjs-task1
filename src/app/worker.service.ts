import { Injectable } from '@angular/core';

import { Worker } from './worker';
import { WORKER } from './mock-workers';

@Injectable()
export class WorkerService {
    getWorker(): Promise<Worker[]> {
        return Promise.resolve(WORKER);
    }
}