import AbstractResource from '../AbstractResource';

export default class Gifts extends AbstractResource {
    initialise(): void {
        this.resourcePath = '';
        this.defaultAccess = 'member';
    }

    public create: Function = this.createMethodFromPartialSpec({
        method: 'POST',
        path: '/gifts',
    });

    public getActive: Function = this.createMethodFromPartialSpec({
        method: 'GET',
        path: '/active-gift',
    });

    public get: Function = this.createMethodFromPartialSpec({
        method: 'GET',
        path: '/gifts/{id}',
    });

    public update: Function = this.createMethodFromPartialSpec({
        method: 'PATCH',
        path: '/gifts/{id}',
    });

    public placeOrder: Function = this.createMethodFromPartialSpec({
        method: 'PATCH',
        path: '/gifts/{id}/pay',
    });

    public claimGuestBasket: Function = this.createMethodFromPartialSpec({
        method: 'PATCH',
        path: '/gifts/{id}/assign',
    });
}
