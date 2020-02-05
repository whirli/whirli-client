import { transform, transformCollection } from './helpers/transformers';

class BaseTransformer {
    /**
     * Perform the data mapping - this should be overridden by each specific Transformer
     *
     * @param data
     * @param args
     */
    mapData(data: object, args: Array<any> = []): object {
        return {
            data,
            ...args,
        };
    }

    /**
     * Transform an attribute if in includes, and the data exists
     *
     * @param data
     * @param includeName
     * @param transformer
     */
    item(data: Record<string, any>, includeName: string, transformer: BaseTransformer) {
        if (data[includeName]) {
            return transform(data[includeName], transformer);
        }
        return null;
    }

    /**
     * Transform a collection of attributes if in includes, and the data exists
     *
     * @param data
     * @param includeName
     * @param transformer
     */
    collection(data: Record<string, any>, includeName: string, transformer: BaseTransformer): any[] {
        if (data[includeName]) {
            return transformCollection(data[includeName], transformer);
        }
        return [];
    }
}

export default BaseTransformer;
