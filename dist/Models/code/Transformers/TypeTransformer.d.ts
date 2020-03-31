import Code from '../Type';
import TypeInterface from '../../../Interfaces/code/Type';
import BaseTransformer from '../../../BaseTransformer';
export default class TypeTransformer extends BaseTransformer {
    mapData(type: TypeInterface): Code;
}
