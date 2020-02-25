# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.0.1] - 2020-02-25
## Migration Guide
1) All calls that need to go to a WACC route have been moved out of the root namespace for the Client. For the admin call to `client.users.get()`, the new call would be `client.wacc.users.get()`. Simply add this wacc property in the call chain for all the WACC access calls to migrate.
2) All calls to `client.subscriptions` should be changed to `client.userSubscriptions` (or `client.wacc.userSubscriptions` as per the above)

## Changelog
### Breaking changes
- Move the WACC calls to a wacc resource. This is accessible under `client.wacc`, e.g. `client.wacc.users.get()`
- Changed the Subscriptions resource to the correctly named UserSubscriptions

### Added
- Create Auth resource for Login, Register and Logout.
- Create WACC resources for orders, products, returns, search and users.
- Add development tools, such as prettier, eslint, lint-staged and babel.
- Add Jest, and a unit test for the client.
- Add the access type for each route to the partial spec and spec, so it can be set.
- Add a defaultAccess to the overall resource, to help with repetitive access type declarations.
