import AttributionSourceInterface from '../../Interfaces/attributionSource/AttributionSource';

export default class AttributionSource {
    constructor(parameters: AttributionSourceInterface) {
        Object.assign(this, parameters);
    }
}
