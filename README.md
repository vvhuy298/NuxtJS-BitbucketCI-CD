## About PJ
example project run with NuxtJS3(Vuejs3)

use Bitbucket Ci/CD to auto complied code then deploy to S3 when have push/merge event to develop/release branch

use ESlint to ensure code style, code format...

## Build Setup

install mkcert

```bash
$ brew install mkcert
```

```bash
# install dependencies
$ yarn install

# mkcert
$ mkcert -install
$ mkcert localhost

# serve with hot reload at https://localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```
