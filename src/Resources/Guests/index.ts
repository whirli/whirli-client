import Client from '../../Client';
import Baskets from './Baskets';

export interface GuestsResources {
    baskets: Baskets;
}

export function loadGuestsResources(client: Client): GuestsResources {
    return {
        baskets: new Baskets(client),
    };
}
