import Code from '../code/Code';
import User from '../user/User';

export default interface Interest {
    id: string;
    createdAt: Date | string;
    updatedAt: Date | string;
    userId: number;
    code?: string;
    statusId: number;
    pilotOptIn: boolean;
    marketingOptIn: boolean;
    launchOptIn: boolean;
    confirmed: boolean;
    viewCount: number;
    user?: User;
    referringCode?: Code | {};
    referringInterest?: Interest | {};
    uuids?: [];
}
