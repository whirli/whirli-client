import Client from '../../Client';
import AbstractResource from '../AbstractResource';
import Addons from './Addons';
export default class Subscriptions extends AbstractResource {
    addons: Addons;
    constructor(api: Client);
    initialise(): void;
    all: Function;
    allWithChange: Function;
}
