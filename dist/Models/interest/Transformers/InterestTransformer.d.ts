import InterestInterface from '../../../Interfaces/interest/Interest';
import CodeInterface from '../../../Interfaces/code/Code';
import BaseTransformer from '../../../BaseTransformer';
import Interest from '../Interest';
export default class InterestTransformer extends BaseTransformer {
    mapData(interest: InterestInterface): Interest;
    includeReferringCode(interest: InterestInterface): CodeInterface | {} | null;
    includeReferringInterest(interest: InterestInterface): object | null;
}
