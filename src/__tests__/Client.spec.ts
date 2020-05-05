import { httpClient } from '../../test/mocks/HttpClient';
import Client from '../Client';
import Auth from '../Resources/Auth/Auth';
import Users from '../Resources/Users/Users';
import WACCOrders from '../Resources/Wacc/Orders/Orders';
import WACCReturnOrders from '../Resources/Wacc/ReturnOrders/ReturnOrders';
import WACCSearch from '../Resources/Wacc/Search/Search';
import WACCUsers from '../Resources/Wacc/Users/Users';
import Subscriptions from '../Resources/Subscriptions/Subscriptions';
import SubscriptionAddons from '../Resources/Subscriptions/SubscriptionAddons/SubscriptionAddons';
import Codes from '../Resources/Codes/Codes';
import Toybox from '../Resources/User/Toybox/Toybox';
import Products from '../Resources/Products/Products';
import GuestBasket from '../Resources/Guest/Basket/Basket';
import UserBasket from '../Resources/User/Basket/Basket';
import UserSubscriptions from '../Resources/User/Subscriptions/Subscriptions';

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
        expect(client.users).toBeInstanceOf(Users);
        expect(client.subscriptions.subscriptions).toBeInstanceOf(Subscriptions);
        expect(client.subscriptions.addons).toBeInstanceOf(SubscriptionAddons);
        expect(client.codes).toBeInstanceOf(Codes);
        expect(client.products).toBeInstanceOf(Products);
        expect(client.wacc.orders).toBeInstanceOf(WACCOrders);
        expect(client.wacc.returnOrders).toBeInstanceOf(WACCReturnOrders);
        expect(client.wacc.search).toBeInstanceOf(WACCSearch);
        expect(client.wacc.users).toBeInstanceOf(WACCUsers);
        expect(client.guest.basket).toBeInstanceOf(GuestBasket);
        expect(client.user.basket).toBeInstanceOf(UserBasket);
        expect(client.user.subscriptions).toBeInstanceOf(UserSubscriptions);
        expect(client.user.toybox).toBeInstanceOf(Toybox);
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
