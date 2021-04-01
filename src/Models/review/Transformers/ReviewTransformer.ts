import BaseTransformer from '../../../BaseTransformer';
import ReviewInterface from '../../../Interfaces/review/Review';
import Review from '../Review';
import UserInterface from '../../../Interfaces/user/User';
import UserTransformer from '../../user/Transformers/UserTransformer';
import ProductVariantInterface from '../../../Interfaces/product/ProductVariant';
import ProductVariantTransformer from '../../product/Transformers/ProductVariantTransformer';

export default class ReviewTransformer extends BaseTransformer {
    mapData(review: ReviewInterface): Review {
        return new Review({
            id: review.id,
            rating: review.rating,
            createdAt: review.createdAt,
            updatedAt: review.updatedAt,
            // has one
            user: this.includeUser(review) || undefined,
            productVariant: this.includeProductVariant(review) || undefined,
        });
    }

    includeUser(review: ReviewInterface): UserInterface | null {
        return this.item(review, 'user', new UserTransformer());
    }

    includeProductVariant(review: ReviewInterface): ProductVariantInterface | null {
        return this.item(review, 'productVariant', new ProductVariantTransformer());
    }
}
