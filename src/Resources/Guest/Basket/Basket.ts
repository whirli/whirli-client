import AbstractResource from '../../AbstractResource';

/**
 * _Used for **guest** baskets only._
 * - Getting a guest basket: `$whirli.guest.basket.get(basketId);`
 * - Adding a basketLine: `$whirli.guest.basket.addLine({ basketId, productVariantId, quantity });`
 * - Updating a basketLine: `$whirli.guest.basket.updateLine({ basketLineId, quantity });`
 * - Deleting a basketLine `$whirli.guest.basket.removeLine(basketLineId);`
 */
export default class Basket extends AbstractResource {
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
