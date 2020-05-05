import Client from '../../Client';
import Basket from './Basket';
import Subscriptions from './Subscriptions';
import Toybox from './Toybox';
import Details from './Details';
import Create from './Create';

/**
 * _Resources connected to a user._
 *
 * - `$whirli.user.create...;`
 * - `$whirli.user.basket...;`
 * - `$whirli.user.subscriptions...;`
 * - `$whirli.user.toybox...;`
 * - `$whirli.user.details...;`
 */
export default class User {
    public basket: Basket;
    public create: Create;
    public details: Details;
    public subscriptions: Subscriptions;
    public toybox: Toybox;

    constructor(client: Client) {
        this.basket = new Basket(client);
        this.create = new Create(client);
        this.details = new Details(client);
        this.subscriptions = new Subscriptions(client);
        this.toybox = new Toybox(client);
    }
}
