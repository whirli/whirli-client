import AbstractResource from '../AbstractResource';
export default class Products extends AbstractResource {
    initialise(): void;
    get: (productAssociationSlug: string) => void;
    getByType: (productAssociationTypeSlug: string) => void;
}
