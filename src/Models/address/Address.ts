import AddressInterface from '../../Interfaces/address/Address';

export default class Address {
    constructor(parameters: AddressInterface) {
        Object.assign(this, parameters);
    }
}
