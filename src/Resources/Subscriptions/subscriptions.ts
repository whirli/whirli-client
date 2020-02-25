import AbstractResource from '../AbstractResource';

export default class Subscriptions extends AbstractResource {
    initialise(): void {
        this.resourcePath = 'user-subscriptions';
    }

    public create: Function = this.createMethodFromPartialSpec({
        access: 'member',
        method: 'POST',
        path: '',
    });

    public update: Function = this.createMethodFromPartialSpec({
        access: 'member',
        method: 'PUT',
        path: '/{id}',
    });

    public pay: Function = this.createMethodFromPartialSpec({
        access: 'member',
        method: 'PUT',
        path: '/{id}/pay',
    });
}
