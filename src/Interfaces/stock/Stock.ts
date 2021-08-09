import ProductVariant from '../product/ProductVariant';
import ReturnOrderLine from '../return/ReturnOrderLine';
import User from '../user/User';
import Bin from '../bin/Bin';

export default interface Stock {
    id?: string;
    createdAt?: Date;
    updatedAt?: Date;
    statusId?: number;
    // belongs to
    productVariant?: ProductVariant | null;
    user?: User | null;
    bin?: Bin | null;
    // has many
    returnOrderLines?: ReturnOrderLine[];
}
