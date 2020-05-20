import Transform from '../Transform';
import TransformInterface from '../../../Interfaces/asset/Transform';
import BaseTransformer from '../../../BaseTransformer';
export default class TransformTransformer extends BaseTransformer {
    mapData(transform: TransformInterface): Transform;
}
