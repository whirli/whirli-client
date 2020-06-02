import AbstractResource from '../AbstractResource';

export default class Products extends AbstractResource {
    initialise(): void {
        this.resourcePath = '/products/associations';
        this.defaultAccess = 'guest';
    }

    /**
     * Get a single product association
     * e.g. `/products/associations/disney`.
     */
    public get: (productAssociationSlug: string) => void = this.createMethodFromPartialSpec({
        method: 'GET',
        path: '/{slug}',
    });

    /**
     * Get a single product association type: age, brand, category, collection
     * e.g. `/products/associations/age`.
     */
    public getByType: (productAssociationTypeSlug: string) => void = this.createMethodFromPartialSpec({
        method: 'GET',
        path: '/type/{slug}',
    });
}
