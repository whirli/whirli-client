import TransformInterface from '../../Interfaces/asset/Transform';

export default class Transform {
    constructor(parameters: TransformInterface) {
        Object.assign(this, parameters);
    }
}
