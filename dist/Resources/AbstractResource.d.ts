import Client from '../Client';
import PartialSpec from '../Interfaces/PartialSpec';
export default class AbstractResource {
    protected api: Client;
    protected resourcePath: string;
    constructor(api: Client);
    initialise(): void;
    createMethodFromPartialSpec(partialSpec: PartialSpec): Function;
}
