import { httpClient } from '../../test/mocks/HttpClient';
import Client from '../Client';
import Auth from '../Resources/Auth/Auth';
import WACCOrders from '../Resources/Wacc/Orders/Orders';
import WACCReturnOrders from '../Resources/Wacc/ReturnOrders/ReturnOrders';
import WACCSearch from '../Resources/Wacc/Search/Search';
import WACCUsers from '../Resources/Wacc/Users/Users';
import Subscriptions from '../Resources/Subscriptions';
import SubscriptionAddons from '../Resources/Subscriptions/Addons';
import Codes from '../Resources/Codes/Codes';
import Products from '../Resources/Products/Products';
import GuestsBaskets from '../Resources/Guests/Baskets';
import GuestsGifts from '../Resources/Guests/Gifts';
import Users from '../Resources/Users';
import UsersBaskets from '../Resources/Users/Baskets';
import UsersGifts from '../Resources/Users/Gifts';
import UsersToybox from '../Resources/Users/Toybox';
import UsersSubscriptions from '../Resources/Users/Subscriptions';

describe('Client.ts', () => {
    let client: Client;

    beforeEach(() => {
        client = new Client(httpClient, {});
    });

    it('can be instantiated', () => {
        expect(client).toBeInstanceOf(Client);
    });

    it('can return a HttpClient', () => {
        expect(client.getHttpClient()).toEqual(httpClient);
    });

    it('can access all resources', () => {
        // @todo We could probably turn this in to a loop to make it easier
        expect(client.auth).toBeInstanceOf(Auth);
        expect(client.subscriptions).toBeInstanceOf(Subscriptions);
        expect(client.subscriptions.addons).toBeInstanceOf(SubscriptionAddons);
        expect(client.codes).toBeInstanceOf(Codes);
        expect(client.products).toBeInstanceOf(Products);
        expect(client.wacc.orders).toBeInstanceOf(WACCOrders);
        expect(client.wacc.returnOrders).toBeInstanceOf(WACCReturnOrders);
        expect(client.wacc.search).toBeInstanceOf(WACCSearch);
        expect(client.wacc.users).toBeInstanceOf(WACCUsers);
        expect(client.guests.baskets).toBeInstanceOf(GuestsBaskets);
        expect(client.guests.gifts).toBeInstanceOf(GuestsGifts);
        expect(client.users).toBeInstanceOf(Users);
        expect(client.users.baskets).toBeInstanceOf(UsersBaskets);
        expect(client.users.gifts).toBeInstanceOf(UsersGifts);
        expect(client.users.subscriptions).toBeInstanceOf(UsersSubscriptions);
        expect(client.users.toybox).toBeInstanceOf(UsersToybox);
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
