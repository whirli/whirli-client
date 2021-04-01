import BaseTransformer from '../../../BaseTransformer';
import ReviewInterface from '../../../Interfaces/review/Review';
import Review from '../Review';

export default class ReviewTransformer extends BaseTransformer {
    mapData(review: ReviewInterface): Review {
        return new Review({
            id: review.id,
            rating: review.rating,
            createdAt: review.createdAt,
            updatedAt: review.updatedAt,
            // has one
            userId: review.userId,
            productVariantId: review.productVariantId,
        });
    }
}
