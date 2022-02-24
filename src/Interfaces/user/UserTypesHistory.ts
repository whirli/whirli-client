import User from './User';

export default interface UserTypesHistory {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    endedAt?: Date | string | null;
    typeId?: number;
    // belongs to
    user?: User;
    updatedBy?: User;
}
