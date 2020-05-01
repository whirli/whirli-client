import Spec from '../Spec';
import Client from '../Client';
import PartialSpec from '../Interfaces/PartialSpec';
import { AccessType } from '../Interfaces/AccessType';
declare type RequestArguments = Array<string | object | Function>;
export default class AbstractResource {
    protected api: Client;
    protected resourcePath: string;
    protected defaultAccess: AccessType;
    constructor(api: Client);
    initialise(): void;
    createMethodFromPartialSpec(partialSpec: PartialSpec): Function;
    getRequestPath(spec: Spec, requestArgs: RequestArguments): string;
    getRequestConfig(requestArgs: RequestArguments): Array<object>;
}
export {};
