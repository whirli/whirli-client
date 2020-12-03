import BaseTransformer from '../../../BaseTransformer';
import AddressInterface from '../../../Interfaces/address/Address';
import Address from '../Address';

export default class AddressTransformer extends BaseTransformer {
    mapData(address: AddressInterface): Address {
        return new Address({
            id: address.id,
            firstname: address.firstname,
            lastname: address.lastname,
            address: address.address,
            addressTwo: address.addressTwo,
            addressthree: address.addressthree,
            city: address.city,
            company: address.company,
            zip: address.zip,
            shipping: address.shipping,
            billing: address.billing,
            default: address.default,
            phoneNumber: address.phoneNumber,
        });
    }
}
