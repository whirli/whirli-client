import AbstractResource from '../AbstractResource';

export default class Referral extends AbstractResource {
    initialise(): void {
        this.resourcePath = '';
        this.defaultAccess = 'member';
    }

    public get: Function = this.createMethodFromPartialSpec({
        method: 'GET',
        path: '/active-referral',
    });
}
