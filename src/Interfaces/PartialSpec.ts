import { HttpMethod } from './HttpMethod';
import { AccessType } from './AccessType';

export default interface PartialSpec {
    method: HttpMethod;
    access?: AccessType;
    methodType?: string;
    path?: string;
}
