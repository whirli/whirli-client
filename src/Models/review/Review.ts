import ReviewInterface from '../../Interfaces/review/review';

export default class WaitSpot {
    constructor(parameters: ReviewInterface) {
        Object.assign(this, parameters);
    }
}
