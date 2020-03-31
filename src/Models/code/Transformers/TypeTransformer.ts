import Code from '../Type';
import TypeInterface from '../../../Interfaces/code/Type';
import BaseTransformer from '../../../BaseTransformer';

export default class TypeTransformer extends BaseTransformer {
    /**
     * Map an order response
     *
     * @param type
     */
    mapData(type: TypeInterface): Code {
        return new Code({
            id: type.id,
            createdAt: type.createdAt,
            updatedAt: type.updatedAt,
            name: type.name,
        });
    }
}
