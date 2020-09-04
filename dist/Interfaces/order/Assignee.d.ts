export default interface Order {
    id?: string;
    createdAt?: Date;
    updatedAt?: Date;
    firstname?: string;
    lastname?: string;
    email?: string;
    reference?: string;
    resourceType?: string;
    color?: string;
}
