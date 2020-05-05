import Client from '../../Client';
import AbstractResource from '../AbstractResource';
import Baskets from './Baskets';
import Subscriptions from './Subscriptions';
import Toybox from './Toybox';
import Details from './Details';
export default class Users extends AbstractResource {
    baskets: Baskets;
    details: Details;
    subscriptions: Subscriptions;
    toybox: Toybox;
    constructor(api: Client);
    initialise(): void;
    create: Function;
}
