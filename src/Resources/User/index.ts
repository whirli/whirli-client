import Client from '../../Client';
import AbstractResource from '../AbstractResource';
import Basket from './Basket';
import Subscriptions from './Subscription';
import Toybox from './Toybox';
import Details from './Details';

/**
 * _Resources connected to a user._
 *
 * - `$whirli.user.create();`
 * - `$whirli.user.basket...;`
 * - `$whirli.user.subscriptions...;`
 * - `$whirli.user.toybox...;`
 * - `$whirli.user.details...;`
 */
export default class User extends AbstractResource {
    public basket: Basket;
    public details: Details;
    public subscriptions: Subscriptions;
    public toybox: Toybox;

    constructor(api: Client) {
        super(api);
        this.api = api;
        this.initialise();
        this.basket = new Basket(api);
        this.details = new Details(api);
        this.subscriptions = new Subscriptions(api);
        this.toybox = new Toybox(api);
    }

    initialise(): void {
        this.resourcePath = '/users';
        this.defaultAccess = 'guest';
    }

    public create: Function = this.createMethodFromPartialSpec({
        method: 'POST',
        path: '/',
    });
}
