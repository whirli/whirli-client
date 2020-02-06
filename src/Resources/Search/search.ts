import AbstractResource from '../AbstractResource';

export default class Search extends AbstractResource {
    initialise(): void {
        this.resourcePath = 'wacc/search';
    }

    public all(term: string): Function {
        return this.createMethodFromPartialSpec({
            method: 'GET',
            // methodType: 'list', // @todo Add this once auto-pagination is complete
            path: `?search=${term}`,
        });
    }
}
