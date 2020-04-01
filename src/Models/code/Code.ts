import CodeInterface from '../../Interfaces/code/Code';

export default class Code {
    constructor(parameters: CodeInterface) {
        Object.assign(this, parameters);
    }
}
