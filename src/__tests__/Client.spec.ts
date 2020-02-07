import HttpClient from '../interfaces/HttpClient';
import Client from '../Client';
import Auth from '../Resources/Auth/auth';
import Search from '../Resources/Search/search';
import ReturnOrders from '../Resources/Returns/returnOrders';
import Users from '../Resources/Users/users';
import Orders from '../Resources/Orders/orders';

describe('Client.ts', () => {
    const httpClient: HttpClient = { $get: () => ({}), $post: () => ({}) };
    let client: Client;

    beforeEach(() => {
        client = new Client(httpClient);
    });

    it('can return a HttpClient', () => {
        expect(client.getHttpClient()).toEqual(httpClient);
    });

    it('can access all resources', () => {
        // @todo We could probably turn this in to a loop to make it easier
        expect(client.search).toBeInstanceOf(Search);
        expect(client.auth).toBeInstanceOf(Auth);
        expect(client.returnOrders).toBeInstanceOf(ReturnOrders);
        expect(client.users).toBeInstanceOf(Users);
        expect(client.orders).toBeInstanceOf(Orders);
    });

    it('can return the base path for the API', () => {
        expect(client.getBasePath()).toEqual(expect.any(String));
    });
});
