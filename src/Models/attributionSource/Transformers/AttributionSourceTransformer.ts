import AttributionSource from '../AttributionSource';
import AttributionSourceInterface from '../../../Interfaces/attributionSource/AttributionSource';
import BaseTransformer from '../../../BaseTransformer';

export default class AttributionSourceTransformer extends BaseTransformer {
    mapData(attributionSource: AttributionSourceInterface): AttributionSource {
        return new AttributionSource({
            id: attributionSource.id,
            createdAt: attributionSource.createdAt,
            updatedAt: attributionSource.updatedAt,
            discountCode: attributionSource.discountCode,
            utmSource: attributionSource.utmSource,
            utmMedium: attributionSource.utmMedium,
            utmCampaign: attributionSource.utmCampaign,
            utmContent: attributionSource.utmContent,
            gclid: attributionSource.gclid,
            tduid: attributionSource.tduid,
            sourceableId: attributionSource.sourceableId,
            sourceableType: attributionSource.sourceableType,
        });
    }
}
