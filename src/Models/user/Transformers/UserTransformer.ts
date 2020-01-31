import User from '../User';
import OrderTransformer from '../../order/Transformers/OrderTransformer';
import UserInterface from '../../../Interfaces/user/User';
import BaseTransformer from '../../../BaseTransformer';
// import OrderLineTransformer from '../Basket/OrderLineTransformer';

export default class UserTransformer extends BaseTransformer {
    /**
     * Map an order response
     *
     * @param order
     */
    mapData(user: UserInterface) {
        return new User({
            id: user.id,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt,
            name: user.name,
            email: user.email,
            emailVerifiedAt: user.emailVerifiedAt,
            statusId: user.statusId,
            registrationStatusId: user.registrationStatusId,
            stripeId: user.stripeId,
            residualChargesOptIn: user.residualChargesOptIn,
            subscriptionCancellationTerms: user.subscriptionCancellationTerms,
            subscriptionCancellationCharges: user.subscriptionCancellationCharges,
            verifiedAt: user.verifiedAt,
            orderStatus: user.orderStatus,
            resourceType: user.resourceType,
            // has many
            orders: this.includeOrder(user),
            stock: this.includeStock(user),
        });
    }

    includeOrder(order: object) {
        return this.collection(order, 'orders', new OrderTransformer());
    }

    includeStock(stock: object) {
        return this.collection(stock, 'stock', new StockTransformer());
    }
}
