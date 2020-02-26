import ProductVariant from '../product/ProductVariant';
import ReturnOrderLine from '../return/ReturnOrderLine';
import User from '../user/User';
export default interface Stock {
    id?: string;
    createdAt?: Date;
    updatedAt?: Date;
    statusId?: number;
    productVariant?: ProductVariant | null;
    user?: User | null;
    returnOrderLines?: ReturnOrderLine[];
}
