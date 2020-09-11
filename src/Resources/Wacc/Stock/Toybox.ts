import AbstractResource from '../../AbstractResource';

export default class Stock extends AbstractResource {
    initialise(): void {
        this.resourcePath = '/stock/toybox';
        this.defaultAccess = 'wacc';
    }

    public update: Function = this.createMethodFromPartialSpec({
        method: 'PATCH',
        path: '/',
    });
}
