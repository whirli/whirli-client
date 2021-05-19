import AbstractResource from '../AbstractResource';
import { HttpClientConfig, HttpClientResponse } from '../../Interfaces/HttpClient';
import { GiftRedeemRequest } from '../../Interfaces/Requests/member/GiftRequest';
export default class Gift extends AbstractResource {
    initialise(): void;
    redeem: (body: GiftRedeemRequest, ...args: HttpClientConfig) => HttpClientResponse;
}
