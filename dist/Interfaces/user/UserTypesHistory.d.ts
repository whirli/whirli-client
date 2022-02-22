import User from './User';
export default interface UserTypesHistory {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    endedAt?: Date | string | null;
    typeId?: number;
    user?: User;
    updatedBy?: User;
}
