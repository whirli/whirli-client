import BaseTransformer from '../BaseTransformer';

/**
 * Takes data and a transformer, and returns the transformed data
 *
 * @param data
 * @param transformer
 */
export function transform(data: object, transformer: BaseTransformer) {
    return transformer.mapData(data);
}

/**
 * Takes a collection of data and a transformer, and returns the transformed data collection
 *
 * @param collection
 * @param transformer
 */
export function transformCollection(collection: Array<any>, transformer: BaseTransformer) {
    return collection.map(data => transformer.mapData(data));
}

export default {
    transform,
    transformCollection,
};
