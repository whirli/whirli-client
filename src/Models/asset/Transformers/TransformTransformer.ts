import Transform from '../Transform';
import TransformInterface from '../../../Interfaces/asset/Transform';
import BaseTransformer from '../../../BaseTransformer';

export default class TransformTransformer extends BaseTransformer {
    /**
     * Map a transform response
     *
     * @param transform
     */
    mapData(transform: TransformInterface): Transform {
        return new Transform({
            id: transform.id,
            createdAt: transform.createdAt,
            updatedAt: transform.updatedAt,
            name: transform.name,
            handle: transform.handle,
            width: transform.width,
            height: transform.height,
            constraint: transform.constraint,
            quality: transform.quality,
            format: transform.format,
            mode: transform.mode,
            position: transform.position,
        });
    }
}
