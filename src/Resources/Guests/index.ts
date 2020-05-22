import Client from '../../Client';
import Baskets from './Baskets';
import Gifts from './Gifts';

export interface GuestsResources {
    baskets: Baskets;
    gifts: Gifts;
}

export function loadGuestsResources(client: Client): GuestsResources {
    return {
        baskets: new Baskets(client),
        gifts: new Gifts(client),
    };
}
