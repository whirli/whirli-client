import BaseTransformer from '../../../BaseTransformer';
import UserTypesHistoryInterface from '../../../Interfaces/user/UserTypesHistory';
import UserTypesHistory from '../UserTypesHistory';
import UserInterface from '../../../Interfaces/user/User';
export default class UserTypesHistoryTransformer extends BaseTransformer {
    mapData(userTypesHistory: UserTypesHistoryInterface): UserTypesHistory;
    includeUser(userTypesHistory: UserTypesHistoryInterface): UserInterface | null;
    includeUpdatedBy(userTypesHistory: UserTypesHistoryInterface): UserInterface | null;
}
