import Code from '../Code';
import CodeInterface from '../../../Interfaces/code/Code';
import BaseTransformer from '../../../BaseTransformer';
import Type from '../Type';
import InterestInterface from '../../../Interfaces/interest/Interest';
import GiftInterface from '../../../Interfaces/gift/Gift';
import SubscriptionDiscountInterface from '../../../Interfaces/subscription/SubscriptionDiscount';
export default class CodeTransformer extends BaseTransformer {
    mapData(code: CodeInterface): Code;
    includeType(code: CodeInterface): Type | null;
    includeInterest(code: CodeInterface): InterestInterface | {} | null;
    includeGift(code: CodeInterface): GiftInterface | null;
    includeSubscriptionDiscount(code: CodeInterface): SubscriptionDiscountInterface | {} | null;
    includeReferredInterests(code: CodeInterface): Array<InterestInterface | {}> | null;
}
