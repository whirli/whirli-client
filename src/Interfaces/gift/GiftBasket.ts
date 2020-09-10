import { Basket } from '../basket/Basket';
import User from '../user/User';
import Gift from './Gift';

export default interface GiftBasket {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    // Belongs to
    basket?: Basket;
    user?: User;
    gift?: Gift;
}
