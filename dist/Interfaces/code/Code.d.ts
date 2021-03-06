import Type from './Type';
export default interface Code {
    name?: string;
    createdAt?: Date;
    updatedAt?: Date;
    valueTypeId?: number;
    value?: number;
    type?: Type | null;
}
