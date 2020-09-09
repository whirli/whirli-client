import AbstractResource from '../AbstractResource';
import Client from '../../Client';
import Addons from '../Subscriptions/Addons';
import { HttpClientConfig, HttpClientResponse } from '../../Interfaces/HttpClient';
export default class GuestSubscriptions extends AbstractResource {
    addons: Addons;
    constructor(api: Client);
    initialise(): void;
    all: (...args: HttpClientConfig) => HttpClientResponse;
}
