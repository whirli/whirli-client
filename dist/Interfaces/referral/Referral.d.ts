import ReferredUser from './ReferredUser';
export default interface Referral {
    code: string;
    totalEarned: number;
    referredUsers: Array<ReferredUser> | [];
    userBalance: number;
}
