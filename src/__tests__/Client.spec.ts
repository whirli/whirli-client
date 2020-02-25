import HttpClient from '../interfaces/HttpClient';
import Client from '../Client';
import Orders from '../Resources/Orders/orders';
import Products from '../Resources/Products/products';
import ReturnOrders from '../Resources/Returns/returnOrders';
import Search from '../Resources/Search/search';
import Users from '../Resources/Users/users';
import WACCOrders from '../Resources/wacc/Orders/orders';
import WACCProducts from '../Resources/wacc/Products/products';
import WACCReturnOrders from '../Resources/wacc/Returns/returnOrders';
import WACCSearch from '../Resources/wacc/Search/search';
import WACCUsers from '../Resources/wacc/Users/users';

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
        expect(client.orders).toBeInstanceOf(Orders);
        expect(client.products).toBeInstanceOf(Products);
        expect(client.returnOrders).toBeInstanceOf(ReturnOrders);
        expect(client.search).toBeInstanceOf(Search);
        expect(client.users).toBeInstanceOf(Users);
        expect(client.wacc.orders).toBeInstanceOf(WACCOrders);
        expect(client.wacc.products).toBeInstanceOf(WACCProducts);
        expect(client.wacc.returnOrders).toBeInstanceOf(WACCReturnOrders);
        expect(client.wacc.search).toBeInstanceOf(WACCSearch);
        expect(client.wacc.users).toBeInstanceOf(WACCUsers);
    });

    it('can return the base path for the API', () => {
        expect(client.getBasePath()).toEqual(expect.any(String));
    });
});
