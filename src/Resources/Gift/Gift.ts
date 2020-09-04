import AbstractResource from '../AbstractResource';

export default class Gift extends AbstractResource {
    initialise(): void {
        this.resourcePath = '/redeem-gift';
        this.defaultAccess = 'member';
    }

    public redeem: Function = this.createMethodFromPartialSpec({
        method: 'POST',
        path: '/{code}',
    });
}
