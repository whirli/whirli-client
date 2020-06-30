import UndeliverableDate from '../UndeliverableDate';
import UndeliverableDateInterface from '../../../Interfaces/delivery/UndeliverableDate';
import BaseTransformer from '../../../BaseTransformer';
export default class UndeliverableDateTransformer extends BaseTransformer {
    mapData(undeliverableDate: UndeliverableDateInterface): UndeliverableDate;
}
