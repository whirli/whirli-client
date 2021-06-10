import SubscriptionDiscount from '../subscription/SubscriptionDiscount';
import Interest from '../interest/Interest';
import Gift from '../gift/Gift';
import Type from './Type';
export default interface Code {
    name?: string;
    code: string;
    createdAt?: Date;
    updatedAt?: Date;
    startDate?: Date | string;
    endDate?: Date | string;
    valueTypeId: number;
    value?: number;
    type?: Type | null;
    interest?: Interest | {};
    gift?: Gift;
    subscriptionDiscount?: SubscriptionDiscount | {};
    referredInterests?: Array<Interest | {}>;
}
