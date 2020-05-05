import Client from '../../Client';
import AbstractResource from '../AbstractResource';
import Baskets from './Baskets';
import Subscriptions from './Subscriptions';
import Toybox from './Toybox';
import Details from './Details';

export default class Users extends AbstractResource {
    public baskets: Baskets;
    public details: Details;
    public subscriptions: Subscriptions;
    public toybox: Toybox;

    constructor(api: Client) {
        super(api);
        this.api = api;
        this.initialise();
        this.baskets = new Baskets(api);
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
