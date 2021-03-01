import WaitSpotInterface from '../../Interfaces/waitspot/WaitSpot';

export default class WaitSpot {
    constructor(parameters: WaitSpotInterface) {
        Object.assign(this, parameters);
    }
}
