import ProductSkill from '../ProductSkill';
import ProductSkillInterface from '../../../Interfaces/association/ProductSkill';
import ProductInterface from '../../../Interfaces/product/Product';
import ProductAssociationInterface from '../../../Interfaces/association/ProductAssociation';
import AssetInterface from '../../../Interfaces/asset/Asset';
import BaseTransformer from '../../../BaseTransformer';
export default class ProductSkillTransformer extends BaseTransformer {
    mapData(productSkill: ProductSkillInterface): ProductSkill;
    includeAssociated(productSkill: ProductSkillInterface): ProductAssociationInterface | null;
    includeAssets(productSkill: ProductSkillInterface): Array<AssetInterface>;
    includeProducts(productSkill: ProductSkillInterface): Array<ProductInterface>;
}
