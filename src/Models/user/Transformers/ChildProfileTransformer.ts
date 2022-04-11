import BaseTransformer from '../../../BaseTransformer';
import ChildProfileInterface from '../../../Interfaces/user/ChildProfile';
import ChildProfile from '../ChildProfile';
import UserInterface from '../../../Interfaces/user/User';
import UserTransformer from './UserTransformer';

export default class ChildProfileTransformer extends BaseTransformer {
    /**
     * Map an user response
     *
     * @param childProfile
     */
    mapData(childProfile: ChildProfileInterface): ChildProfile {
        return new ChildProfile({
            id: childProfile.id,
            name: childProfile.name,
            dob: childProfile.dob,
            createdAt: childProfile.createdAt,
            updatedAt: childProfile.updatedAt,
            // belongs to
            user: this.includeUser(childProfile) || undefined,
        });
    }

    includeUser(childProfile: ChildProfileInterface): UserInterface | null {
        return this.item(childProfile, 'user', new UserTransformer());
    }
}
