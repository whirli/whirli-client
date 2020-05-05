import AbstractResource from '../AbstractResource';

/**
 * _Creating/updating a user's subscription._
 *
 * - `client.user.subscription.create();`
 * - `client.user.subscription.update();`
 * - `client.user.subscription.pay();`
 */
export default class Subscription extends AbstractResource {
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
