import AbstractResource from '../AbstractResource';

export default class Toybox extends AbstractResource {
    initialise(): void {
        this.resourcePath = '';
        this.defaultAccess = 'member';
    }

    public get: Function = this.createMethodFromPartialSpec({
        method: 'GET',
        path: '/toybox',
    });

    public designateToyForReturn: Function = this.createMethodFromPartialSpec({
        method: 'PATCH',
        path: '/stock/{id}/designate-for-return',
    });

    public undesignateToyForReturn: Function = this.createMethodFromPartialSpec({
        method: 'PATCH',
        path: '/stock/{id}/add-to-toybox',
    });
}
