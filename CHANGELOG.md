# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

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
