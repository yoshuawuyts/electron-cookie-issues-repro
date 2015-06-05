# electron-cookie-issues-repro
[![js-standard-style][standard-image]][standard-url]

Repro for [atom/electron#1852](https://github.com/atom/electron/issues/1852).
Checks whether cookie headers are received or not.

_update: 05/06/2014_: It appears the only bug in `electron` is that `cookie`
related headers aren't shown when fetching data. The actual data does come
through. Be sure to set the `withCredentials` value when requesting data. The
`window.fetch` api doesn't support cookies so we got use the `xhr` module
instead.

## Installation
```bash
$ hub clone yoshuawuyts/electron-cookie-issues-repro
```

## Usage
```sh
# start server
$ npm run start-server

# start electron
$ npm start

# manually verify if requests have properly gone through
```

## License
[MIT](https://tldrlegal.com/license/mit-license)

[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: https://github.com/feross/standard
