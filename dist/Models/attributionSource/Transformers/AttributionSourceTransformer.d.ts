import AttributionSource from '../AttributionSource';
import AttributionSourceInterface from '../../../Interfaces/attributionSource/AttributionSource';
import BaseTransformer from '../../../BaseTransformer';
export default class AttributionSourceTransformer extends BaseTransformer {
    mapData(attributionSource: AttributionSourceInterface): AttributionSource;
}
