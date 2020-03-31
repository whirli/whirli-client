import Code from '../Code';
import CodeInterface from '../../../Interfaces/code/Code';
import BaseTransformer from '../../../BaseTransformer';
import TypeInterface from '../../../Interfaces/code/Type';
import TypeTransformer from './TypeTransformer';

export default class CodeTransformer extends BaseTransformer {
    /**
     * Map an code response
     *
     * @param code
     */
    mapData(code: CodeInterface): Code {
        return new Code({
            name: code.name,
            createdAt: code.createdAt,
            updatedAt: code.updatedAt,
            value: code.value,
            valueTypeId: code.valueTypeId,
            // has one
            type: this.includeType(code),
        });
    }

    includeType(code: CodeInterface): TypeInterface | null {
        return this.item(code, 'type', new TypeTransformer());
    }
}
