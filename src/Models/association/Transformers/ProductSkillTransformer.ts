import ProductSkill from '../ProductSkill';
import ProductSkillInterface from '../../../Interfaces/association/ProductSkill';
import ProductInterface from '../../../Interfaces/product/Product';
import ProductAssociationInterface from '../../../Interfaces/association/ProductAssociation';
import AssetInterface from '../../../Interfaces/asset/Asset';
import AssetTransformer from '../../asset/Transformers/AssetTransformer';
import ProductTransformer from '../../product/Transformers/ProductTransformer';
import ProductAssociationTransformer from './ProductAssociationTransformer';
import BaseTransformer from '../../../BaseTransformer';

export default class ProductSkillTransformer extends BaseTransformer {
    /**
     * Map a product skill response
     *
     * @param productSkill
     */
    mapData(productSkill: ProductSkillInterface): ProductSkill {
        return new ProductSkill({
            id: productSkill.id,
            hasPage: productSkill.hasPage,
            slug: productSkill.slug,
            headerDescription: productSkill.headerDescription,
            headerImage: productSkill.headerImage,
            position: productSkill.position,
            associationClass: productSkill.associationClass,
            primaryDescription: productSkill.primaryDescription,
            additionalDescription: productSkill.additionalDescription,
            productsCount: productSkill.productsCount,
            skillGroup: productSkill.skillGroup,
            // belongs to
            associated: this.includeAssociated(productSkill),
            // has many
            assets: this.includeAssets(productSkill),
            products: this.includeProducts(productSkill),
        });
    }

    includeAssociated(productSkill: ProductSkillInterface): ProductAssociationInterface | null {
        return this.item(productSkill, 'associated', new ProductAssociationTransformer());
    }

    includeAssets(productSkill: ProductSkillInterface): Array<AssetInterface> {
        return this.collection(productSkill, 'assets', new AssetTransformer());
    }

    includeProducts(productSkill: ProductSkillInterface): Array<ProductInterface> {
        return this.collection(productSkill, 'products', new ProductTransformer());
    }
}
