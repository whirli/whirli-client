import HttpClient from '../interfaces/HttpClient';
import Client from '../Client';
import Auth from '../Resources/Auth/Auth';
import Users from '../Resources/Users/Users';
import UserSubscriptions from '../Resources/UserSubscriptions/UserSubscriptions';
import WACCOrders from '../Resources/Wacc/Orders/Orders';
import WACCReturnOrders from '../Resources/Wacc/ReturnOrders/ReturnOrders';
import WACCSearch from '../Resources/Wacc/Search/Search';
import WACCUsers from '../Resources/Wacc/Users/Users';

describe('Client.ts', () => {
    const httpClient: HttpClient = { $get: () => ({}), $post: () => ({}) };
    let client: Client;

    beforeEach(() => {
        client = new Client(httpClient, {});
    });

    it('can return a HttpClient', () => {
        expect(client.getHttpClient()).toEqual(httpClient);
    });

    it('can access all resources', () => {
        // @todo We could probably turn this in to a loop to make it easier
        expect(client.auth).toBeInstanceOf(Auth);
        expect(client.users).toBeInstanceOf(Users);
        expect(client.userSubscriptions).toBeInstanceOf(UserSubscriptions);
        expect(client.wacc.orders).toBeInstanceOf(WACCOrders);
        expect(client.wacc.returnOrders).toBeInstanceOf(WACCReturnOrders);
        expect(client.wacc.search).toBeInstanceOf(WACCSearch);
        expect(client.wacc.users).toBeInstanceOf(WACCUsers);
    });

    it('can return the currently set feature options', () => {
        const features = { trimTrailingSlash: true };
        client = new Client(httpClient, { features });

        expect(client.features()).toEqual(features);
    });

    it('can return the base path for the API', () => {
        expect(client.getBasePath()).toEqual(expect.any(String));
    });
});
