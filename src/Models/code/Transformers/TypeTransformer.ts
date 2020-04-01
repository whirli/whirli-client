import Type from '../Type';
import TypeInterface from '../../../Interfaces/code/Type';
import BaseTransformer from '../../../BaseTransformer';

export default class TypeTransformer extends BaseTransformer {
    mapData(type: TypeInterface): Type {
        return new Type({
            id: type.id,
            createdAt: type.createdAt,
            updatedAt: type.updatedAt,
            name: type.name,
        });
    }
}
