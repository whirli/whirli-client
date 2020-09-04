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
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
            emailVerifiedAt: user.emailVerifiedAt,
            statusId: user.statusId,
            registrationStatusId: user.registrationStatusId,
            stripeId: user.stripeId,
            residualChargesOptIn: user.residualChargesOptIn,
            subscriptionCancellationTerms: user.subscriptionCancellationTerms,
            subscriptionCancellationCharges: user.subscriptionCancellationCharges,
            verifiedAt: user.verifiedAt,
            resourceType: user.resourceType,
            reference: user.reference,
            // has many
            orders: this.includeOrders(user),
        });
    }

    includeOrders(user: UserInterface): OrderInterface[] {
        return this.collection(user, 'orders', new OrderTransformer());
    }
}
