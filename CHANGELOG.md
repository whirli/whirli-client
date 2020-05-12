# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]
### Features
- Updated users addresses 'default' endpoint to have the correct path ([#148](https://github.com/whirli/whirli-client/pull/148)).

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
