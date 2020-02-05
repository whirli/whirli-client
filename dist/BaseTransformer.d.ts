declare class BaseTransformer {
    mapData(data: object, args?: Array<any>): object;
    item(data: Record<string, any>, includeName: string, transformer: BaseTransformer): object | null;
    collection(data: Record<string, any>, includeName: string, transformer: BaseTransformer): any[];
}
export default BaseTransformer;
