import AbstractResource from '../../AbstractResource';

/**
 * _Used for **member's** baskets only._
 * - Getting a user's basket: `$whirli.user.basket.getActive();`
 * - Adding a basketLine: `$whirli.user.basket.addLine({ productVariantId, quantity });`
 * - Updating a basketLine: `$whirli.user.basket.updateLine({ basketLineId, quantity });`
 * - Deleting a basketLine: `$whirli.user.basket.removeLine(basketLineId);`
 */
export default class Basket extends AbstractResource {
    initialise(): void {
        this.resourcePath = '';
        this.defaultAccess = 'member';
    }

    public getActive: Function = this.createMethodFromPartialSpec({
        method: 'GET',
        path: '/active-basket',
    });

    public addLine: Function = this.createMethodFromPartialSpec({
        method: 'POST',
        path: '/basket-lines',
    });

    public updateLine: Function = this.createMethodFromPartialSpec({
        method: 'PUT',
        path: '/basket-lines/{id}',
    });

    public removeLine: Function = this.createMethodFromPartialSpec({
        method: 'DELETE',
        path: '/basket-lines/{id}',
    });
}
