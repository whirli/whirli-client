import ProductSkillInterface from '../../Interfaces/association/ProductSkill';

export default class ProductSkill {
    constructor(parameters: ProductSkillInterface) {
        Object.assign(this, parameters);
    }
}
