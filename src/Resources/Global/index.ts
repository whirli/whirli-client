import Client from '../../Client';
import Contact from './Contact';

export interface GlobalResources {
    contact: Contact;
}

export function loadGlobalResources(client: Client): GlobalResources {
    return {
        contact: new Contact(client),
    };
}
