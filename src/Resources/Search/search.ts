import AbstractResource from '../AbstractResource';
import PartialSpec from '../../Interfaces/PartialSpec';

export default class Search extends AbstractResource {
    initialise(): void {
        this.resourcePath = 'search';
    }

    products(): Function {
        const spec: PartialSpec = {
            method: 'GET',
            // methodType: 'list', // @todo Add this once auto-pagination is complete
            path: '/products',
        };
        return this.createMethodFromPartialSpec(spec);
    }
}
