import UndeliverableDate from '../UndeliverableDate';
import UndeliverableDateInterface from '../../../Interfaces/delivery/UndeliverableDate';
import BaseTransformer from '../../../BaseTransformer';

export default class UndeliverableDateTransformer extends BaseTransformer {
    /**
     * Map an shipping addon response
     *
     * @param shippingAddon
     */
    mapData(undeliverableDate: UndeliverableDateInterface): UndeliverableDate {
        return new UndeliverableDate({
            date: undeliverableDate.date,
        });
    }
}
