import AbstractResource from '../AbstractResource';
import { HttpClientConfig, HttpClientResponse } from '../../Interfaces/HttpClient';
import { ContactRequest } from '../../Interfaces/Requests/ContactRequest';
export default class Contact extends AbstractResource {
    initialise(): void;
    submit: (body: ContactRequest, ...args: HttpClientConfig) => HttpClientResponse;
}
