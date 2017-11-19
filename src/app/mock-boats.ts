import { Boat } from './boat';

export const BOATS: Boat[] = [

    {
        id: 1,
        name: "Boat One",
        type: "Sail",
        photo: "http://via.placeholder.com/350x150/51A143",
        length: 7.6,
        work_description: "Needs a new anchor",
        arrival_date: "2017-04-23T10:00:00Z",
        delivery_date: "2017-04-27T10:00:00Z",
        status: "under repair"
    },
    {
        id: 2,
        name: "Boat Two",
        type: "Motor",
        photo: "http://via.placeholder.com/350x150/269AB3",
        length: 8.3,
        work_description: "Needs a new engine",
        arrival_date: "2017-05-02T11:00:00Z",
        delivery_date: "2017-05-07T11:00:00Z",
        status: "under repair"
    }
];