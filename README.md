eosio-api-resource-provider
=======

Greymass TypeScript library template, intended for libraries that work in any JavaScript context (node.js, Browser, React native), `@types/node` are installed only for tests, don't rely on any node.js types or imports inside `src/` (no `buffer`, `crypto` imports etc, they can be filled for browser but will bloat the bundle 100x)

## Installation

The `eosio-api-resource-provider` package is distributed as a module on [npm](https://www.npmjs.com/package/eosio-api-resource-provider).

```
yarn add eosio-api-resource-provider
# or
npm install --save eosio-api-resource-provider
```

## Usage

TODO

## Developing

You need [Make](https://www.gnu.org/software/make/), [node.js](https://nodejs.org/en/) and [yarn](https://classic.yarnpkg.com/en/docs/install) installed.

Clone the repository and run `make` to checkout all dependencies and build the project. See the [Makefile](./Makefile) for other useful targets. Before submitting a pull request make sure to run `make lint`.

---

Made with ☕️ & ❤️ by [Greymass](https://greymass.com), if you find this useful please consider [supporting us](https://greymass.com/support-us).
