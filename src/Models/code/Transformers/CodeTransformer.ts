import Code from '../Code';
import CodeInterface from '../../../Interfaces/code/Code';
import BaseTransformer from '../../../BaseTransformer';
import TypeTransformer from './TypeTransformer';
import Type from '../Type';
import InterestInterface from '../../../Interfaces/interest/Interest';
import InterestTransformer from '../../interest/Transformers/InterestTransformer';
import GiftInterface from '../../../Interfaces/gift/Gift';
import GiftTransformer from '../../gift/Transformers/GiftTransformer';
import SubscriptionDiscountInterface from '../../../Interfaces/subscription/SubscriptionDiscount';
import SubscriptionDiscountTransformer from '../../subscription/Transformers/SubscriptionDiscountTransformer';

export default class CodeTransformer extends BaseTransformer {
    mapData(code: CodeInterface): Code {
        return new Code({
            name: code.name,
            code: code.code,
            startDate: code.startDate,
            endDate: code.endDate,
            createdAt: code.createdAt,
            updatedAt: code.updatedAt,
            value: code.value,
            valueTypeId: code.valueTypeId,
            // belongs to
            type: this.includeType(code),
            interest: this.includeInterest(code) || undefined,
            gift: this.includeGift(code) || undefined,
            subscriptionDiscount: this.includeSubscriptionDiscount(code) || undefined,
            referredInterests: this.includeReferredInterests(code) || undefined,
        });
    }

    includeType(code: CodeInterface): Type | null {
        return this.item(code, 'type', new TypeTransformer());
    }

    includeInterest(code: CodeInterface): InterestInterface | {} | null {
        return this.item(code, 'interest', new InterestTransformer());
    }

    includeGift(code: CodeInterface): GiftInterface | null {
        return this.item(code, 'gift', new GiftTransformer());
    }

    includeSubscriptionDiscount(code: CodeInterface): SubscriptionDiscountInterface | {} | null {
        return this.item(code, 'subscriptionDiscount', new SubscriptionDiscountTransformer());
    }

    includeReferredInterests(code: CodeInterface): Array<InterestInterface | {}> | null {
        return this.collection(code, 'referredInterests', new InterestTransformer());
    }
}
