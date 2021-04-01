import BaseTransformer from '../../../BaseTransformer';
import ReviewInterface from '../../../Interfaces/review/Review';
import Review from '../Review';
export default class ReviewTransformer extends BaseTransformer {
    mapData(review: ReviewInterface): Review;
}
