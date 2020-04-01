import Code from '../Code';
import CodeInterface from '../../../Interfaces/code/Code';
import BaseTransformer from '../../../BaseTransformer';
import TypeTransformer from './TypeTransformer';
import Type from '../Type';

export default class CodeTransformer extends BaseTransformer {
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

    includeType(code: CodeInterface): Type | null {
        return this.item(code, 'type', new TypeTransformer());
    }
}
