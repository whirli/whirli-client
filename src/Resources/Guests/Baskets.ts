import AbstractResource from '../AbstractResource';

/**
 * _Used for **guest** baskets only._
 * - Getting a guest basket: `client.guests.baskets.get(basketId);`
 * - Adding a basketLine: `client.guests.baskets.addLine({ basketId, productVariantId, quantity });`
 * - Updating a basketLine: `client.guests.baskets.updateLine({ basketLineId, quantity });`
 * - Deleting a basketLine `client.guests.baskets.removeLine(basketLineId);`
 */
export default class Baskets extends AbstractResource {
    initialise(): void {
        this.resourcePath = '/basket-lines';
        this.defaultAccess = 'guest';
    }

    public get: Function = this.createMethodFromPartialSpec({
        method: 'GET',
        path: '/{id}',
    });

    public addLine: Function = this.createMethodFromPartialSpec({
        method: 'POST',
        path: '/',
    });

    public updateLine: Function = this.createMethodFromPartialSpec({
        method: 'PUT',
        path: '/{id}',
    });

    public removeLine: Function = this.createMethodFromPartialSpec({
        method: 'DELETE',
        path: '/{id}',
    });
}
