import InterestInterface from '../../../Interfaces/interest/Interest';
import CodeInterface from '../../../Interfaces/code/Code';
import BaseTransformer from '../../../BaseTransformer';
import Interest from '../Interest';
import CodeTransformer from '../../code/Transformers/CodeTransformer';

export default class InterestTransformer extends BaseTransformer {
    mapData(interest: InterestInterface): Interest {
        return new Interest({
            id: interest.id,
            createdAt: interest.createdAt,
            updatedAt: interest.updatedAt,
            userId: interest.userId,
            code: interest.code,
            referringCode: this.includeReferringCode(interest) || undefined,
            statusId: interest.statusId,
            pilotOptIn: interest.pilotOptIn,
            marketingOptIn: interest.marketingOptIn,
            launchOptIn: interest.launchOptIn,
            confirmed: interest.confirmed,
            viewCount: interest.viewCount,
            referringInterest: this.includeReferringInterest(interest) || undefined,
            uuids: interest.uuids,
        });
    }

    includeReferringCode(interest: InterestInterface): CodeInterface | {} | null {
        return this.item(interest, 'referringCode', new CodeTransformer());
    }

    includeReferringInterest(interest: InterestInterface): object | null {
        return this.item(interest, 'referringInterest', new InterestTransformer());
    }
}
