import User from '../user/User';
export default interface Referral {
    id: string;
    code: string;
    redemptions: number;
    createdAt: Date;
    referredUsers?: Array<User>;
    user?: User | null;
}
