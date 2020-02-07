import User from '../User';
import UserInterface from '../../../Interfaces/user/User';
import OrderInterface from '../../../Interfaces/order/Order';
import OrderTransformer from '../../order/Transformers/OrderTransformer';
import BaseTransformer from '../../../BaseTransformer';

export default class UserTransformer extends BaseTransformer {
    /**
     * Map an user response
     *
     * @param user
     */
    mapData(user: UserInterface): User {
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
            orders: this.includeOrdersCollection(user),
        });
    }

    includeOrdersCollection(user: UserInterface): OrderInterface[] {
        return this.collection(user, 'orders', new OrderTransformer());
    }
}
