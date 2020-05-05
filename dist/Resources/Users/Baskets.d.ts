import AbstractResource from '../AbstractResource';
export default class Baskets extends AbstractResource {
    initialise(): void;
    getActive: Function;
    addLine: Function;
    updateLine: Function;
    removeLine: Function;
}
