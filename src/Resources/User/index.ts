import Client from '../../Client';
import Basket from './Basket';
import Subscriptions from './Subscriptions';
import Toybox from './Toybox';
import Details from './Details';
import Create from './Create';

export default class User {
    public basket: Basket;
    public subscriptions: Subscriptions;
    public toybox: Toybox;
    public details: Details;
    public create: Create;

    constructor(client: Client) {
        this.basket = new Basket(client);
        this.subscriptions = new Subscriptions(client);
        this.toybox = new Toybox(client);
        this.details = new Details(client);
        this.create = new Create(client);
    }
}
