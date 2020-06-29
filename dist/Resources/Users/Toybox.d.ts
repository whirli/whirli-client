import AbstractResource from '../AbstractResource';
import { HttpClientConfig, HttpClientResponse } from '../../Interfaces/HttpClient';
export default class Toybox extends AbstractResource {
    initialise(): void;
    get: Function;
    designateToyForReturn: Function;
    undesignateToyForReturn: Function;
    purchase: (stockId: string, ...args: HttpClientConfig) => HttpClientResponse;
}
