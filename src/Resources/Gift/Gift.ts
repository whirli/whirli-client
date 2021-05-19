import AbstractResource from '../AbstractResource';
import { HttpClientConfig, HttpClientResponse } from '../../Interfaces/HttpClient';
import { GiftRedeemRequest } from '../../Interfaces/Requests/member/GiftRequest';

export default class Gift extends AbstractResource {
    initialise(): void {
        this.resourcePath = '/redeem-gift';
        this.defaultAccess = 'member';
    }

    public redeem: (
        body: GiftRedeemRequest,
        ...args: HttpClientConfig
    ) => HttpClientResponse = this.createMethodFromPartialSpec({
        method: 'POST',
        path: '/',
    });
}
