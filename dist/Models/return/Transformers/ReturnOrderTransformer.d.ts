import ReturnOrder from '../ReturnOrder';
import ReturnOrderInterface from '../../../Interfaces/return/ReturnOrder';
import ReturnOrderLineInterface from '../../../Interfaces/return/ReturnOrderLine';
import UserInterface from '../../../Interfaces/user/User';
import BaseTransformer from '../../../BaseTransformer';
export default class ReturnOrderTransformer extends BaseTransformer {
    mapData(returnOrder: ReturnOrderInterface): ReturnOrder;
    includeUser(returnOrder: ReturnOrderInterface): UserInterface | null;
    includeOrderLines(returnOrder: ReturnOrderInterface[]): ReturnOrderLineInterface[];
}
