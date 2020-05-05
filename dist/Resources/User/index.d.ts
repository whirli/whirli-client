import Client from '../../Client';
import AbstractResource from '../AbstractResource';
import Basket from './Basket';
import Subscription from './Subscription';
import Toybox from './Toybox';
import Details from './Details';
export default class User extends AbstractResource {
    basket: Basket;
    details: Details;
    subscription: Subscription;
    toybox: Toybox;
    constructor(api: Client);
    initialise(): void;
    create: Function;
}
