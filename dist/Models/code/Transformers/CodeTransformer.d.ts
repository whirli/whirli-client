import Code from '../Code';
import CodeInterface from '../../../Interfaces/code/Code';
import BaseTransformer from '../../../BaseTransformer';
import TypeInterface from '../../../Interfaces/code/Type';
export default class CodeTransformer extends BaseTransformer {
    mapData(code: CodeInterface): Code;
    includeType(code: CodeInterface): TypeInterface | null;
}
