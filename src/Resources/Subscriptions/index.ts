import Client from '../../Client';
import AbstractResource from '../AbstractResource';
import Addons from './Addons';

/**
 * _Resources connected to subscriptions._
 *
 * - `$whirli.subscriptions.all();`
 * - `$whirli.subscriptions.addons.all();`
 */
export default class Subscriptions extends AbstractResource {
    public addons: Addons;

    constructor(api: Client) {
        super(api);
        this.api = api;
        this.initialise();
        this.addons = new Addons(api);
    }

    initialise(): void {
        this.resourcePath = '/subscriptions';
        this.defaultAccess = 'guest';
    }

    public all: Function = this.createMethodFromPartialSpec({
        method: 'GET',
        path: '/',
    });
}
