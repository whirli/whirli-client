import BaseTransformer from '../../../BaseTransformer';
import ReasonForEndInterface from '../../../Interfaces/reasonForEnd/ReasonForEnd';
import ReasonForEnd from '../ReasonForEnd';

export default class ReasonForEndTransformer extends BaseTransformer {
    /**
     * Map an product response
     *
     * @param reasonForEnd
     */
    mapData(reasonForEnd: ReasonForEndInterface): ReasonForEnd {
        return new ReasonForEnd({
            id: reasonForEnd.id,
            name: reasonForEnd.name,
            message: reasonForEnd.message,
            active: reasonForEnd.active,
            createdAt: reasonForEnd.createdAt,
            updatedAt: reasonForEnd.updatedAt,
        });
    }
}
