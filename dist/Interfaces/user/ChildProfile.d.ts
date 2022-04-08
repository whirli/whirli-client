import User from './User';
export default interface ChildProfile {
    id?: string;
    name: string;
    dob: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user?: User;
}
