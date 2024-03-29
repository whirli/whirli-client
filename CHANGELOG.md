# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).


## [Unreleased]
## [0.0.89] - 2022-04-12
### 🏡 Features
- Add child profiles to users resource index ([#422](https://github.com/whirli/whirli-client/pull/422))

## [0.0.88] - 2022-04-11
### 🏡 Features
- Add child profile member & wacc resources ([#420](https://github.com/whirli/whirli-client/pull/420))

## [0.0.87] - 2022-03-11
### 🏡 Features
- Add User types history resource items ([#412](https://github.com/whirli/whirli-client/pull/412))
- Add user referral properties to user interface ([#417](https://github.com/whirli/whirli-client/pull/417))

## [0.0.86] - 2022-03-03
### Features
- add return collection and shipping manifest endpoints ([#415](https://github.com/whirli/whirli-client/pull/415))

## [0.0.85] - 2022-02-21
### 🏡 Features
- Add shipping manifest to return order ([#413](https://github.com/whirli/whirli-client/pull/413))

## [0.0.84] - 2022-02-21
### 🏡 Features
- Add extraData to shipping manifest resource ([#410](https://github.com/whirli/whirli-client/pull/410))

## [0.0.83] - 2022-02-09
### 🏡 Features
- Add New user subscription timestamps to the user resource ([#407](https://github.com/whirli/whirli-client/pull/407))

## [0.0.82] - 2022-02-08
### 🏡 Features
- Add binLocation property to order interface and transformer ([#403](https://github.com/whirli/whirli-client/pull/403))
- - Add shippingAddons to ReturnOrder ([#405](https://github.com/whirli/whirli-client/pull/405))

## [0.0.81] - 2021-11-11
### 🏡 Features
- add shippingNotificationEmail to gift and order ([#400])(https://github.com/whirli/whirli-client/pull/402)

## [0.0.80] - 2021-11-08
### 🏡 Features
- add assign and unassign gift endpoints ([#400])(https://github.com/whirli/whirli-client/pull/400)

## [0.0.79] - 2021-10-26
### 🏡 Features
- add visible and category to asset ([#398])(https://github.com/whirli/whirli-client/pull/398)

## [0.0.78] - 2021-10-19
### 🏡 Chore
- Reset version number ([#396])(https://github.com/whirli/whirli-client/pull/396)

## [0.0.77] - 2021-10-15
### 🏡 Features
- Add getOutstandingOrderCount endpoint ([#394])(https://github.com/whirli/whirli-client/pull/394)

## [0.0.76] - 2021-10-11
### 🏡 Features
- add weight to shipping manifest and shipping data to order ([#387])(https://github.com/whirli/whirli-client/pull/392)

## [0.0.75] - 2021-10-08
### 🏡 Features
- Add gift relationship to order interface ([#389])(https://github.com/whirli/whirli-client/pull/389)
- Add dispatch_by property to gift interface/transformer ([#390])(https://github.com/whirli/whirli-client/pull/390)
- Add assignee and reference to gift interface/transformer & assigned relations to the user interface/transformer ([#391])(https://github.com/whirli/whirli-client/pull/391)

## [0.0.74] - 2021-09-28
### 🏡 Chore
- Revert OrderLine and Stock properties ([#387])(https://github.com/whirli/whirli-client/pull/387)

## [0.0.73] - 2021-09-27
### 🏡 Chore
- Move new OrderLine properties to the Stock model instead ([#385])(https://github.com/whirli/whirli-client/pull/385)

## [0.0.72] - 2021-09-15
- add ShippingService and ShippingManifest, and courier endpoints - https://github.com/whirli/whirli-client/pull/379

## [0.0.71] - 2021-09-09
### 🏡 Chore
- Add missing property to order interface and transformer ([#376])(https://github.com/whirli/whirli-client/pull/376)

### 🏡 Features
- Add new accessors to order interface and transformer (([#378])(https://github.com/whirli/whirli-client/pull/378))

### 🏡 Features
- Add Complete Outgoing Order endpoint ([#374])(https://github.com/whirli/whirli-client/pull/374)
- Add Unassign Endpoint ([#374])(https://github.com/whirli/whirli-client/pull/374)
- Update Order and OrderLine Interfaces/Transformers with new resource fields ([#374])(https://github.com/whirli/whirli-client/pull/374)

## [0.0.70] - 2021-08-26
### 🏡 Features
- Add payment intent endpoint ([#371])(https://github.com/whirli/whirli-client/pull/371)

## [0.0.69] - 2021-08-23
### 🏡 Features
- Add order priority end point ([#369])(https://github.com/whirli/whirli-client/pull/369)

## [0.0.68] - 2021-08-09
### 🏡 Chore
- Change method from PUT to POST for complete return endpoint ([#365])(https://github.com/whirli/whirli-client/pull/365)

## [0.0.67] - 2021-08-06
### Features
- rename damaged props to written off ([#362])(https://github.com/whirli/whirli-client/pull/362)

## [0.0.66] - 2021-08-06
### 🏡 Features
- Add new stock check endpoint ([#363](https://github.com/whirli/whirli-client/pull/363))
- Add BinStock suite and update existing models relating to this new model ([#363](https://github.com/whirli/whirli-client/pull/363))

## [0.0.65] - 2021-08-02
### 🏡 Features
- Add Stock Replenishment - Bin, Stock, StockCheck & ProductVariant updates ([#357](https://github.com/whirli/whirli-client/pull/357))

## [0.0.64] - 2021-07-30
### 🏡 Features
- Add stock reassign endpoint ([#355](https://github.com/whirli/whirli-client/pull/358)

## [0.0.63] - 2021-07-23
### 🐛 Bug fixes
- Fix axios vs nuxt/axios method issue and add API to client.ts ([#355](https://github.com/whirli/whirli-client/pull/355))

## [0.0.62] - 2021-07-19
### 🏡 Chore
- N/A

## [0.0.61] - 2021-07-19
### 🏡 Features
- Add auth resources ([#353](https://github.com/whirli/whirli-client/pull/353))

## [0.0.60] - 2021-07-12
### 🏡 Features
- add primaryDescription and additionalDescription props to skill association([#349](https://github.com/whirli/whirli-client/pull/351))

## [0.0.59] - 2021-07-09
### 🏡 Features
- add optimum age and primary skill to product, and add ProductSkill association([#349](https://github.com/whirli/whirli-client/pull/349/files))

## [0.0.58] - 2021-07-09
### 🏡 Chore
- Amends some user subscription & user subscription addon types([#346](https://github.com/whirli/whirli-client/pull/346))

## [0.0.57] - 2021-07-05
### 🚀 Features
- Update interfaces to accommodate the Product Discounts feature, change SubscriptionDiscount status iterface ([#344](https://github.com/whirli/whirli-client/pull/344))

## [0.0.56] - 2021-07-02
### 🚀 Features
- Add processed_at to returns ([#341](https://github.com/whirli/whirli-client/pull/341))

### 🐛 Bug fixes
- Fix type SubscriptionDiscountType values ([#342](https://github.com/whirli/whirli-client/pull/342))

## [0.0.55] - 2021-06-23
### 🚀 Features
- Add referrer to attribution source ([#338](https://github.com/whirli/whirli-client/pull/338))

## [0.0.54] - 2021-06-15
### 🚀 Features
- Add WACC referrals endpoints ([#334](https://github.com/whirli/whirli-client/pull/334))
- Add WACC Codes endpoints & Subscription Discount Interface/Model/Transformer ([#335](https://github.com/whirli/whirli-client/pull/335))
- Add POST /attribution-source endpoint ([#336](https://github.com/whirli/whirli-client/pull/336))

## [0.0.53] - 2021-05-18
### 🚀 Features
- Add my playtime endpoint ([#328](https://github.com/whirli/whirli-client/pull/328))

## [0.0.52] - 2021-05-18
- Re-build

## [0.0.51] - 2021-05-17
### 🚀 Features
- Add product associations index endpoint ([#329](https://github.com/whirli/whirli-client/pull/329))

### 🏡 Chore
- Change old resource endpoint syntax to the new one ([#326](https://github.com/whirli/whirli-client/pull/326))
- Update ProductVariant Interface and Transformer ([#327](https://github.com/whirli/whirli-client/pull/327))

## [0.0.50] - 2021-04-30
### 🚀 Features
- Add status id to WaitSpot interface for Wacc ([#320](https://github.com/whirli/whirli-client/pull/320))
- Add "transform_id" property to AssetTransform interface / transformer ([#321](https://github.com/whirli/whirli-client/pull/321))

## [0.0.49] - 2021-04-19
### 🚀 Features
- Change products waitSpots resource ([#318](https://github.com/whirli/whirli-client/pull/318))

## [0.0.48] - 2021-04-14
### 🚀 Features
- Add show reviews guest endpoint ([#316](https://github.com/whirli/whirli-client/pull/316))

## [0.0.47] - 2021-04-13
### 🚀 Features
- Update ProductVariant Interface/Model/Transformer ([#314](https://github.com/whirli/whirli-client/pull/314))

## [0.0.46] - 2021-04-12
- Add WACC product search resource stock props

## [0.0.45] - 2021-04-07
- Update changelog to realign version number with package.json - No feature change from 0.0.43

## [0.0.43] - 2021-04-06
### 🚀 Features
- Add waitspots to the WACC resource ([#311](https://github.com/whirli/whirli-client/pull/311))

## [0.0.42] - 2021-04-01
### 🚀 Features
- Add Review resources ([#308](https://github.com/whirli/whirli-client/pull/308))
## [0.0.41] - 2021-03-03
### 🏡 Chore
- Replace product with variant in waitspots ([#304](https://github.com/whirli/whirli-client/pull/304))
## [0.0.40] - 2021-03-01
### 🚀 Features
- Add WaitSpot resources ([#300](https://github.com/whirli/whirli-client/pull/300))
- Add gtin to product interface ([#299](https://github.com/whirli/whirli-client/pull/299))

### 🐛 Bug fixes
- Add missing WaitSpots to users resource index ([#302](https://github.com/whirli/whirli-client/pull/302))
## [0.0.39] - 2020-12-07
### 🏡 Chore
- Update Subscription Pricing Plan properties ([#296](https://github.com/whirli/whirli-client/pull/296))
## [0.0.38] - 2020-12-03
### Features
- Change product recommended age type in interface to number ([#291](https://github.com/whirli/whirli-client/pull/291))
- Add Roles resource to the WACC client ([#290](https://github.com/whirli/whirli-client/pull/290))
- Add WACC roles resource & GET roles ([#289](https://github.com/whirli/whirli-client/pull/289))
- Add users assign wacc role endpoint in resource ([#287](https://github.com/whirli/whirli-client/pull/287))
- Add update OrderLine endpoint ([#286](https://github.com/whirli/whirli-client/pull/286))
- Add ReasonForEnd model and transformer ([#285](https://github.com/whirli/whirli-client/pull/285))
- Update the WACC User Subscription cancel plan endpoint ([#284](https://github.com/whirli/whirli-client/pull/284))
- Add the edit Return Order Lines endpoint ([#283](https://github.com/whirli/whirli-client/pull/283))
- Add notes property to user ([#282](https://github.com/whirli/whirli-client/pull/282))
- Add weight property to order ([#281](https://github.com/whirli/whirli-client/pull/281))
- Update User interface and transformer to the latest on the Whirli API ([#279](https://github.com/whirli/whirli-client/pull/279))
- Create the UserSubscriptionAddon model, transformer & interface ([#278](https://github.com/whirli/whirli-client/pull/278))
- Add 'planName' to the UserSubscription interface/transformer ([#277](https://github.com/whirli/whirli-client/pull/277))
- Add UserSubscriptions' upgrade tier endpoint ([#276](https://github.com/whirli/whirli-client/pull/276))
- Add subscription tokens to user interface ([#275](https://github.com/whirli/whirli-client/pull/275))
- Add Toybox PATCH to wacc stock toybox resource ([#272](https://github.com/whirli/whirli-client/pull/272))

### 🏡 Chore
- Update Order & OrderLine interfaces / transformers ([#288](https://github.com/whirli/whirli-client/pull/288))
- Fix the UserSubscription to use UserSubscriptionAddon instead of SubscriptionAddon as its 'addon' property ([#278](https://github.com/whirli/whirli-client/pull/278))
- Rename the type "SubscriptionAddonPricingPlanIntervalLength" to "SubscriptionIntervalLength" ([#271](https://github.com/whirli/whirli-client/pull/271))
- Refactored the subscriptionAddons request to the new syntax ([#268](https://github.com/whirli/whirli-client/pull/268))

### 🚀 Features
- Add subscription to the SubscriptionPricingPlan interface/transformer ([#271](https://github.com/whirli/whirli-client/pull/271))
- Update existing interface, models & transformers ([#270](https://github.com/whirli/whirli-client/pull/270))
- Add new Product, Address, Gift, Stock, Subscription, Checkout, ShippingAddon, Role & Basket related interfaces, models & transformers ([#270](https://github.com/whirli/whirli-client/pull/270))

- Add subscriptions to the guest resource ([#267](https://github.com/whirli/whirli-client/pull/267))

- Add "reference" to User interface ([#266](https://github.com/whirli/whirli-client/pull/266))


- Add SubscriptionAddon Model & Transformer ([#264](https://github.com/whirli/whirli-client/pull/264))
- Add SubscriptionAddonPricingPlan Model & Transformer ([#264](https://github.com/whirli/whirli-client/pull/264))
- Add SubscriptionTier Model & Transformer ([#264](https://github.com/whirli/whirli-client/pull/264))
- Add UserSubscription Model & Transformer ([#264](https://github.com/whirli/whirli-client/pull/264))


- Add SubscriptionAddon interfaces ([#263](https://github.com/whirli/whirli-client/pull/263))
- Add SubscriptionAddonPricingPlan interfaces ([#263](https://github.com/whirli/whirli-client/pull/263))
- Add Subscription Tier interfaces ([#263](https://github.com/whirli/whirli-client/pull/263))
- Add UserSubscription interfaces ([#263](https://github.com/whirli/whirli-client/pull/263))


- Add WACC user subscription endpoints ([#262](https://github.com/whirli/whirli-client/pull/262))

### 🐛 Bug fixes
- Fix unlinked WACC OrderLines endpoint ([#292](https://github.com/whirli/whirli-client/pull/292))

- Fix the UserSubscription interfaces' 'activeSubscriptionTier' property to have the correct type ([#274](https://github.com/whirli/whirli-client/pull/274))

- Fix Subscription interface to match the api resource ([#269](https://github.com/whirli/whirli-client/pull/269))

- Fix UserSubscription interface reasonForEndId type ([#265](https://github.com/whirli/whirli-client/pull/265))

- Change member redeem endpoints' path to updated version ([#236](https://github.com/whirli/whirli-client/pull/236/files))

## [0.0.37] - 2020-08-20
### 🚀 Features
- Add isFirstOrder to order interface ([#260](https://github.com/whirli/whirli-client/pull/260))

- Create product suggest endpoint ([#257](https://github.com/whirli/whirli-client/pull/257))

### 🐛 Bug fixes
- Refactored users resource path ([#256](https://github.com/whirli/whirli-client/pull/256))
- Updated User interface to have firstname and lastname instead of name ([#259](https://github.com/whirli/whirli-client/pull/259))

## [0.0.36] - 2020-08-12
### 🚀 Features
- Add reasons-for-end guest endpoint ([#253](https://github.com/whirli/whirli-client/pull/253))

## [0.0.35] - 2020-08-10
### 🚀 Features
- Add user endpoint ([#251](https://github.com/whirli/whirli-client/pull/251))

## [0.0.34] - 2020-08-05
### 🚀 Features
- Add members cancel subscription plan endpoint ([#248](https://github.com/whirli/whirli-client/pull/248))

## [0.0.33] - 2020-07-09
### 🚀 Features
- Add card's resource and endpoints ([#241](https://github.com/whirli/whirli-client/pull/241))

## [0.0.32] - 2020-07-08
### 🐛 Bug fixes
- Fixes to active-referral ([#238](https://github.com/whirli/whirli-client/pull/239))

## [0.0.31] - 2020-07-08
### 🐛 Bug fixes
- Fix get method and referrals interface ([#238](https://github.com/whirli/whirli-client/pull/238))

## [0.0.30] - 2020-07-08
### 🚀 Features
- Add active-referral endpoint ([#235](https://github.com/whirli/whirli-client/pull/235))

## [0.0.29] - 2020-07-06
### 🐛 Bug fixes
- Change slug name from hyphenated to not on public product-lists to fix endpoint not registering it ([#232](https://github.com/whirli/whirli-client/pull/232))

## [0.0.28] - 2020-07-02
### 🚀 Features
- Add picking endpoint to orders and gifts resource ([#225](https://github.com/whirli/whirli-client/pull/225))
- Add member change subscription endpoint ([#219](https://github.com/whirli/whirli-client/pull/219))
- Add undeliverable dates endpoint ([#224](https://github.com/whirli/whirli-client/pull/224))

## [0.0.27] - 2020-06-30
### 🚀 Features
- Add purchase endpoint ([#220](https://github.com/whirli/whirli-client/pull/220))

## [0.0.26] - 2020-06-26
### 🐛 Bug fixes
- Fix checkout route ([#217](https://github.com/whirli/whirli-client/pull/217))

## [0.0.25] - 2020-06-24
### 🚀 Features
- Add orders endpoints ([#212](https://github.com/whirli/whirli-client/pull/212))
- Add checkout endpoint ([#213](https://github.com/whirli/whirli-client/pull/213))
- Add shipping addon resource and get all endpoint ([#214](https://github.com/whirli/whirli-client/pull/214))

## [0.0.24] - 2020-06-17
### 🚀 Features
- Add claim endpoint for users, for assigning guest resources to the user ([#207](https://github.com/whirli/whirli-client/pull/207))

### 🏡 Chore
- Refactor contact form submit endpoint to use new types ([#204](https://github.com/whirli/whirli-client/pull/204))

## [0.0.23] - 2020-06-15
### 🚀 Features
- Add subscription pricing plan resource ([#198](https://github.com/whirli/whirli-client/pull/198))
- Add update relations PUT to product associations resource ([#199](https://github.com/whirli/whirli-client/pull/199))
- Add contact endpoint for submitting contact form ([#202](https://github.com/whirli/whirli-client/pull/202))
- Add preview change subscription endpoint ([#201](https://github.com/whirli/whirli-client/pull/201))

### 🐛 Bug fixes
- Fix subscription pricing plans with change status endpoint not going to the correct path ([#198](https://github.com/whirli/whirli-client/pull/198))

### 🏡 Chore
- Refactor subscription index to use new return types ([#198](https://github.com/whirli/whirli-client/pull/198))

## [0.0.22] - 2020-06-09

### 🚀 Features
- Add all product-lists and product-list-lines endpoints, both public and private ([#196](https://github.com/whirli/whirli-client/pull/196))

### 🐛 Bug fixes
- Temp change returnOrder complete from POST to PUT to test staging ([#195](https://github.com/whirli/whirli-client/pull/195))

## [0.0.21] - 2020-06-05
### 🐛 Bug fixes
- fix guest activeGift endpoint not going to the correct place ([#192](https://github.com/whirli/whirli-client/pull/192))

## [0.0.20] - 2020-06-05
### 🚨 Breaking changes
- `client.guests.gifts.get(giftId)` has become `client.guests.gifts.getActive()`, and no longer requires the giftId. ([#192](https://github.com/whirli/whirli-client/pull/192))

## [0.0.19] - 2020-06-04
### 🚀 Features
- Add get activeGift endpoint for members ([#190](https://github.com/whirli/whirli-client/pull/190))

### 🏡 Chore
- Add types for all gift member endpoints ([#190](https://github.com/whirli/whirli-client/pull/190))

## [0.0.18] - 2020-06-03
### 🚀 Features
- Add gift endpoint for redeeming gift code ([#187](https://github.com/whirli/whirli-client/pull/187))

### 🐛 Bug fixes
- Add missing product and product variant properties ([#186](https://github.com/whirli/whirli-client/pull/186))

## [0.0.17] - 2020-06-02
### 🚀 Features
- Change 'get' method to 'all' and add new get method for getting individual product ([#153](https://github.com/whirli/whirli-client/pull/174))
- Add member endpoint for retrieving subscription pricing plans with can change status ([#170](https://github.com/whirli/whirli-client/pull/170))
- Add updateAll endpoint to assets resource to update the position of multiple images when reordered ([#177](https://github.com/whirli/whirli-client/pull/177))
- Add product associations resource and update products resource to house the new associations resource.

### 🐛 Bug fixes
- Update Brand, Age, Collection and Category association interfaces and transformers to include Assets ([#160](https://github.com/whirli/whirli-client/pull/160))
  - Added publishedAt to product interface as well
- Add assets, productAssociations and relatedProducts has-many relations to Product Interface ([#168](https://github.com/whirli/whirli-client/pull/168))
  - Update 'variants' to 'productVariants' in Product interface
  - Add supplier properties to ProductVariant interface
  - Change some transformer to return the class instance instead of an interface (ProductTransformer for an example)
- Update product relations endpoint and remove deleteRelated ([#169](https://github.com/whirli/whirli-client/pull/169))

### 🏡 Chore
- Add proper return types to resource methods ([#183](https://github.com/whirli/whirli-client/pull/183))

## [0.0.16] - 2020-05-25
### 🐛 Bug fixes
- Fix Gift endpoints having incorrect method types

## [0.0.15] - 2020-05-22
### 🚀 Features
- Add Gift endpoints for users and guests ([#153](https://github.com/whirli/whirli-client/pull/153))
- Add Assets endpoints and corresponding Interfaces and Models ([#151](https://github.com/whirli/whirli-client/pull/151))
  - Asset
  - AssetSource
  - AssetTransform
  - Transform
  - Add models and transformers for above Interfaces

### 🐛 Bug fixes
- Update users addresses 'default' endpoint to have the correct path ([#148](https://github.com/whirli/whirli-client/pull/148)).

## [0.0.14] - 2020-05-12
### 🚀 Features
- Adding get toybox method to users' toybox resource ([#146](https://github.com/whirli/whirli-client/pull/146)).

## [0.0.13] - 2020-05-12
### 🚀 Features
- Add resource for user addresses endpoints. ([#142](https://github.com/whirli/whirli-client/pull/142))

**WACC:**
- Added Product association interfaces ([#139](https://github.com/whirli/whirli-client/pull/139)):
  - ProductAssociation
  - ProductAgeRange
  - ProductBrand
  - ProductCategory
  - ProductCollection
  - ProductHazard
  - ProductManufacturer
  - Added association models
- Added association transformers ([#139](https://github.com/whirli/whirli-client/pull/139)).
- Change PUT to POST on complete order endpoint ([#143](https://github.com/whirli/whirli-client/pull/143)).

## [0.0.12] - 2020-05-06
### 🐛 Bug Fixes
- Fixing get guest basket endpoint.

## [0.0.11] - 2020-05-05
### 🚨 Breaking changes
- Move the User calls to a user resource. This is accessible under `client.users`, e.g. `client.users.create()`, `client.users.baskets.getActive()`.
- Move the Subscriptions calls to a subscriptions resource. This is accessible under `client.subscriptions`, e.g. `client.subscriptions.all()`.

### ⛳️ Migration Guide
1) All calls that need to go to a User route have been moved out of the root namespace for the Client. Simply add this user property in the call chain for all the User access calls to migrate.
    - For example `client.basketLines.addLine` should change to: `client.users.baskets.addLine()`.
2) All calls to `client.subscriptionAddons` should be changed to `client.subscriptions.addons`.

## [0.0.10] - 2020-05-05
### 🚀 Features
- Add resource for users to update user details. ([#132](https://github.com/whirli/whirli-client/pull/132))
### 🏡 Chore
- Changed the default access on the users resource to be 'member'. ([#132](https://github.com/whirli/whirli-client/pull/132))

## [0.0.9] - 2020-05-01
### 🚀 Features
- Add support for the config variable in axios calls such as axios.post(url, data, config)
### 🏡 Chore
- Add standard-version and a release script for easier releasing

## [0.0.8] - 2020-04-28
### 🚀 Features
- Adding resource for toybox to designate and undesignate toy for return.
- Adding resource for products get products with query params.
- Adding WACC gift resources, models and transformers
- Minor updates to order and user transformers

## [0.0.7] - 2020-04-09
### 🚀 Features
- Add method for validating reset password token.

## [0.0.6] - 2020-04-03
### 🚀 Features
- Add Basket, BasketLine, Subscriptions, SubscriptionAddons and Codes resources, models, transformers and interfaces.

## [0.0.5] - 2020-03-09
### 🐛 Bug Fixes
- Update the forgot and reset password endpoints to match the changed API endpoints (no more /auth prefix) [#81](https://github.com/whirli/whirli-client/pull/81)

## [0.0.4] - 2020-03-09
### 🐛 Bug Fixes
- Fix the method names for forgot and reset password [#74](https://github.com/whirli/whirli-client/pull/74)

## [0.0.3] - 2020-02-26
### 🐛 Bug Fixes
- Fix a bug that was resulting in two slashes after the access section of the route when a non-empty path was provided [#72](https://github.com/whirli/whirli-client/pull/72)

### 👓 Tests
- Add tests for the AbstractResource class [#72](https://github.com/whirli/whirli-client/pull/72)

## [0.0.1] - 2020-02-25
## ⛳️ Migration Guide
1) All calls that need to go to a WACC route have been moved out of the root namespace for the Client. For the admin call to `client.users.get()`, the new call would be `client.wacc.users.get()`. Simply add this wacc property in the call chain for all the WACC access calls to migrate.
2) All calls to `client.subscriptions` should be changed to `client.userSubscriptions` (or `client.wacc.userSubscriptions` as per the above)

## Changelog
### 🚨 Breaking changes
- Move the WACC calls to a wacc resource. This is accessible under `client.wacc`, e.g. `client.wacc.users.get()`
- Changed the Subscriptions resource to the correctly named UserSubscriptions

### 🚀 Features
- Create Auth resource for Login, Register and Logout.
- Create WACC resources for orders, products, returns, search and users.
- Add development tools, such as prettier, eslint, lint-staged and babel.
- Add Jest, and a unit test for the client.
- Add the access type for each route to the partial spec and spec, so it can be set.
- Add a defaultAccess to the overall resource, to help with repetitive access type declarations.
