import AbstractResource from '../AbstractResource';
import { HttpClientConfig, HttpClientResponse } from '../../Interfaces/HttpClient';
import ContactForm from '../../Interfaces/contact/ContactForm';
export default class Contact extends AbstractResource {
    initialise(): void;
    submit: (formFields: ContactForm, ...args: HttpClientConfig) => HttpClientResponse;
}
