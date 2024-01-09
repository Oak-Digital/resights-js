# Resights-js

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

A Typescript/Javascript library for the [Resights API](https://api.resights.dk)

## Install

```bash
pnpm install @oak-digital/resights-js
```

## Usage

To use this library you need to [obtain a resights API token](https://api.resights.dk/docs#/%F0%9F%94%91%20Token/token). In this example you need to replace the `RESIGHTS_API_TOKEN` with your actual token.

```ts
import { Resights } from '@oak-digital/resights-js'

const client = new Resights(RESIGHTS_API_TOKEN)
```

## Docs

You can find online docs through [tsdocs.dev](https://tsdocs.dev/search/docs/@oak-digital/resights-js) or [jsdocs.io](https://www.jsdocs.io/package/@oak-digital/resights-js)

## License

[MIT](./LICENSE) License © 2023-PRESENT [Anthony Fu](https://github.com/antfu)

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/@oak-digital/resights-js?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/@oak-digital/resights-js
[npm-downloads-src]: https://img.shields.io/npm/dm/@oak-digital/resights-js?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/@oak-digital/resights-js
[bundle-src]: https://img.shields.io/bundlephobia/minzip/@oak-digital/resights-js?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/package/@oak-digital/resights-js
[license-src]: https://img.shields.io/github/license/Oak-Digital/resights-js.svg?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/Oak-Digital/resights-js/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/@oak-digital/resights-js
