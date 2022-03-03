import BaseTransformer from '../../../BaseTransformer';
import UserTypesHistoryInterface from '../../../Interfaces/user/UserTypesHistory';
import UserTypesHistory from '../UserTypesHistory';
import UserInterface from '../../../Interfaces/user/User';
import UserTransformer from './UserTransformer';

export default class UserTypesHistoryTransformer extends BaseTransformer {
    /**
     * Map an user response
     *
     * @param userTypesHistory
     */
    mapData(userTypesHistory: UserTypesHistoryInterface): UserTypesHistory {
        return new UserTypesHistory({
            id: userTypesHistory.id,
            createdAt: userTypesHistory.createdAt,
            updatedAt: userTypesHistory.updatedAt,
            endedAt: userTypesHistory.endedAt,
            typeId: userTypesHistory.typeId,
            // belongs to
            user: this.includeUser(userTypesHistory) || undefined,
            updatedBy: this.includeUpdatedBy(userTypesHistory) || undefined,
        });
    }

    includeUser(userTypesHistory: UserTypesHistoryInterface): UserInterface | null {
        return this.item(userTypesHistory, 'user', new UserTransformer());
    }

    includeUpdatedBy(userTypesHistory: UserTypesHistoryInterface): UserInterface | null {
        return this.item(userTypesHistory, 'updatedBy', new UserTransformer());
    }
}
