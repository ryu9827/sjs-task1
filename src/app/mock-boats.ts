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


    // { id: 11, name: 'Mr. Nice' },
    // { id: 12, name: 'Narco' },
    // { id: 13, name: 'Bombasto' },
    // { id: 14, name: 'Celeritas' },
    // { id: 15, name: 'Magneta' },
    // { id: 16, name: 'RubberMan' },
    // { id: 17, name: 'Dynama' },
    // { id: 18, name: 'Dr IQ' },
    // { id: 19, name: 'Magma' },
    // { id: 20, name: 'Tornado' }
];