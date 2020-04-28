import AbstractResource from '../AbstractResource';

export default class Toybox extends AbstractResource {
    initialise(): void {
        this.resourcePath = '/stock';
        this.defaultAccess = 'member';
    }

    public designateToyForReturn: Function = this.createMethodFromPartialSpec({
        method: 'PATCH',
        path: '/{id}/designate-for-return',
    });

    public undesignateToyForReturn: Function = this.createMethodFromPartialSpec({
        method: 'PATCH',
        path: '/{id}/add-to-toybox',
    });
}
