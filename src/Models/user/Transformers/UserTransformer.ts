import User from '../User';
import UserInterface from '../../../Interfaces/user/User';
import OrderInterface from '../../../Interfaces/order/Order';
import OrderTransformer from '../../order/Transformers/OrderTransformer';
import BaseTransformer from '../../../BaseTransformer';
import StockInterface from '../../../Interfaces/stock/Stock';
import StockTransformer from '../../stock/Transformers/StockTransformer';
import AddressInterface from '../../../Interfaces/address/Address';
import PurchaseStockInterface from '../../../Interfaces/stock/PurchaseStock';
import ProductListInterface from '../../../Interfaces/product/ProductList';
import ReturnOrderInterface from '../../../Interfaces/return/ReturnOrder';
import ReturnOrderTransformer from '../../return/Transformers/ReturnOrderTransformer';
import { Basket as BasketInterface } from '../../../Interfaces/basket/Basket';
import BasketTransformer from '../../basket/Transformers/BasketTransformer';
import UserSubscriptionInterface from '../../../Interfaces/user/UserSubscription';
import UserSubscriptionTransformer from './UserSubscriptionTransformer';
import AddressTransformer from '../../address/Transformers/AddressTransformer';
import PurchaseStockTransformer from '../../stock/Transformers/PurchaseStockTransformer';
import ProductListTransformer from '../../product/Transformers/ProductListTransformer';
import RoleInterface from '../../../Interfaces/role/Role';
import RoleTransformer from '../../role/Transformers/RoleTransformer';

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
            color: user.color,
            highlights: user.highlights,
            // Has many
            orders: this.includeOrders(user),
            stock: this.includeStock(user),
            addresses: this.includeAddresses(user),
            toybox: this.includeToybox(user),
            lists: this.includeLists(user),
            returnOrders: this.includeReturnOrders(user),
            activeBasket: this.includeBasket(user),
            userSubscriptions: this.includeUserSubscriptions(user),
            activeUserSubscriptions: this.includeUserSubscriptions(user) || undefined,
            activeUserSubscriptionStatusId: user.activeUserSubscriptionStatusId,
            activeUserSubscriptionPlan: user.activeUserSubscriptionPlan,
            activeReturnOrder: this.includeActiveReturnOrder(user) || undefined,
            roles: this.includeRoles(user),
            waccRole: user.waccRole,
            // Accessors
            onFirstOrder: user.onFirstOrder,
            toyboxTokens: user.toyboxTokens,
            additionalTokens: user.additionalTokens,
            availableTokens: user.availableTokens,
            subscriptionTokens: user.subscriptionTokens,
            maxTokens: user.maxTokens,
            basketQuantity: user.basketQuantity,
            activeBasketTotalTokens: user.activeBasketTotalTokens,
            balance: user.balance,
            changeSubscriptionStatus: user.changeSubscriptionStatus,
            cancelSubscriptionStatus: user.cancelSubscriptionStatus,
            notes: user.notes,
        });
    }

    includeOrders(user: UserInterface): Array<OrderInterface> {
        return this.collection(user, 'orders', new OrderTransformer());
    }

    includeStock(user: UserInterface): Array<StockInterface> {
        return this.collection(user, 'stock', new StockTransformer());
    }

    includeAddresses(user: UserInterface): Array<AddressInterface> {
        return this.collection(user, 'addresses', new AddressTransformer());
    }

    includeToybox(user: UserInterface): Array<PurchaseStockInterface> {
        return this.collection(user, 'toybox', new PurchaseStockTransformer());
    }

    includeLists(user: UserInterface): Array<ProductListInterface> {
        return this.collection(user, 'lists', new ProductListTransformer());
    }

    includeReturnOrders(user: UserInterface): Array<ReturnOrderInterface> {
        return this.collection(user, 'returnOrders', new ReturnOrderTransformer());
    }

    includeActiveReturnOrder(user: UserInterface): ReturnOrderInterface | null {
        return this.item(user, 'activeReturnOrder', new ReturnOrderTransformer());
    }

    includeRoles(user: UserInterface): Array<RoleInterface> {
        return this.collection(user, 'roles', new RoleTransformer());
    }

    includeBasket(user: UserInterface): Array<BasketInterface> {
        return this.collection(user, 'activeBasket', new BasketTransformer());
    }

    includeUserSubscriptions(user: UserInterface): Array<UserSubscriptionInterface> {
        return this.collection(user, 'userSubscriptions', new UserSubscriptionTransformer());
    }
}
