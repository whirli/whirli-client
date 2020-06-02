import Client from '../../Client';
import AbstractResource from '../AbstractResource';
import Associations from './Associations';
export default class Products extends AbstractResource {
    associations: Associations;
    constructor(api: Client);
    initialise(): void;
    all: Function;
    get: Function;
}
