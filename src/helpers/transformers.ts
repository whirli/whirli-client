import BaseTransformer from '../BaseTransformer';

/**
 * Takes data and a transformer, and returns the transformed data
 *
 * @param data
 * @param transformer
 * @param args
 */
export function transform(data: object, transformer: BaseTransformer, ...args: Array<any>) {
    return transformer.mapData(data, ...args);
}

/**
 * Takes a collection of data and a transformer, and returns the transformed data collection
 *
 * @param collection
 * @param transformer
 * @param args
 */
export function transformCollection(collection: Array<any>, transformer: BaseTransformer, ...args: Array<any>) {
    return collection.map(data => transformer.mapData(data, ...args));
}

export default {
    transform,
    transformCollection,
};
