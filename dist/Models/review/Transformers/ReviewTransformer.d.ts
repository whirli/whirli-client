import BaseTransformer from '../../../BaseTransformer';
import ReviewInterface from '../../../Interfaces/review/Review';
import Review from '../Review';
import UserInterface from '../../../Interfaces/user/User';
import ProductVariantInterface from '../../../Interfaces/product/ProductVariant';
export default class ReviewTransformer extends BaseTransformer {
    mapData(review: ReviewInterface): Review;
    includeUser(review: ReviewInterface): UserInterface | null;
    includeProductVariant(review: ReviewInterface): ProductVariantInterface | null;
}
