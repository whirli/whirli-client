import User from './User';

export default interface ChildProfile {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    name: string;
    dob: Date | string;
    // belongs to
    user?: User;
}
