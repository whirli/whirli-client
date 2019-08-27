import AbstractResource from '../AbstractResource';

export default class Search extends AbstractResource {
    initialise() {
        this.resourcePath = 'search';
    }

    products() {
        const spec = {
            method: 'GET',
            // methodType: 'list', // @todo Add this once auto-pagination is complete
            path: '/products',
        };
        return this.createMethodFromPartialSpec(spec);
    }
}
