import BaseTransformer from '../../../BaseTransformer';
import ReasonForEndInterface from '../../../Interfaces/reasonForEnd/ReasonForEnd';
import ReasonForEnd from '../ReasonForEnd';
export default class ReasonForEndTransformer extends BaseTransformer {
    mapData(reasonForEnd: ReasonForEndInterface): ReasonForEnd;
}
