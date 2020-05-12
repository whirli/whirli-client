import AbstractResource from '../AbstractResource';
export default class Toybox extends AbstractResource {
    initialise(): void;
    get: Function;
    designateToyForReturn: Function;
    undesignateToyForReturn: Function;
}
