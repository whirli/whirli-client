import BaseTransformer from '../../../BaseTransformer';
import ChildProfileInterface from '../../../Interfaces/user/ChildProfile';
import ChildProfile from '../ChildProfile';
import UserInterface from '../../../Interfaces/user/User';
export default class ChildProfileTransformer extends BaseTransformer {
    mapData(childProfile: ChildProfileInterface): ChildProfile;
    includeUser(childProfile: ChildProfileInterface): UserInterface | null;
}
