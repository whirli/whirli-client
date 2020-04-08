import AbstractResource from '../AbstractResource';

export default class UserSubscriptions extends AbstractResource {
    initialise(): void {
        this.resourcePath = '/user-subscriptions';
        this.defaultAccess = 'member';
    }

    public create: Function = this.createMethodFromPartialSpec({
        method: 'POST',
        path: '/',
    });

    public update: Function = this.createMethodFromPartialSpec({
        method: 'PATCH',
        path: '/{id}',
    });

    public pay: Function = this.createMethodFromPartialSpec({
        method: 'PATCH',
        path: '/{id}/pay',
    });
}
