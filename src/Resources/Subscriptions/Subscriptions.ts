import AbstractResource from '../AbstractResource';

export default class Subscriptions extends AbstractResource {
    initialise(): void {
        this.resourcePath = '/subscriptions';
        this.defaultAccess = 'guest';
    }

    public all: Function = this.createMethodFromPartialSpec({
        method: 'GET',
        path: '/',
    });
}
