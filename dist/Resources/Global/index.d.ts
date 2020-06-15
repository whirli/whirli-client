import Client from '../../Client';
import Contact from './Contact';
export interface GlobalResources {
    contact: Contact;
}
export declare function loadGlobalResources(client: Client): GlobalResources;
