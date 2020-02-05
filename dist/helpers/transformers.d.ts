import BaseTransformer from '../BaseTransformer';
export declare function transform(data: object, transformer: BaseTransformer, args?: Array<any>): object;
export declare function transformCollection(collection: Array<any>, transformer: BaseTransformer, args?: Array<any>): object[];
declare const _default: {
    transform: typeof transform;
    transformCollection: typeof transformCollection;
};
export default _default;
