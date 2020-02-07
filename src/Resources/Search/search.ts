import AbstractResource from '../AbstractResource';

export default class Search extends AbstractResource {
    initialise(): void {
        this.resourcePath = 'wacc/search';
    }

    public all: Function = this.createMethodFromPartialSpec({
        method: 'GET',
        path: '',
    });
}
