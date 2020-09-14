import BaseTransformer from '../../../BaseTransformer';
import AddressInterface from '../../../Interfaces/address/Address';
import Address from '../Address';
export default class AddressTransformer extends BaseTransformer {
    mapData(address: AddressInterface): Address;
}
