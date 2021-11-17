# @moneyforward/cloud-react-ui

UI components for Money Forward Cloud built with React.

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/moneyforward/cloud-react-ui/blob/main/LICENSE.txt)
[![npm version](https://img.shields.io/npm/v/@moneyforward/cloud-react-ui.svg?style=flat)](https://www.npmjs.com/package/@moneyforward/cloud-react-ui)
[![deploy Storybook to GitHub Pages](https://github.com/moneyforward/cloud-react-ui/workflows/deploy/badge.svg?branch=main)](https://github.com/moneyforward/cloud-react-ui/actions/workflows/deploy.yml)
[![test with GitHub Actions](https://github.com/moneyforward/cloud-react-ui/workflows/test/badge.svg?branch=main)](https://github.com/moneyforward/cloud-react-ui/actions/workflows/test.yml)

## Component Catalog(Storybook)

<https://moneyforward.github.io/cloud-react-ui/>

## Contributing

```console
npm install
npm run storybook
```

## Versioning

We use [semantic-release](https://github.com/semantic-release/semantic-release), and semantic-release uses [Angular Commit Message Conventions](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#-commit-message-format). We restrict commit message to [Conventional Commits](https://www.conventionalcommits.org/) using [commitlint](https://github.com/conventional-changelog/commitlint) and [husky](https://github.com/typicode/husky).

example:

 | Commit message | Release type | Versioning |
 | -------------- | ------------ | ---------- |
 | `fix: stop graphite breaking when too much pressure applied` | ~~Patch~~ Fix Release | v1.0.0 -> v1.0.1 |
 | `feat: add 'graphiteWidth' option` | ~~Minor~~ Feature Release | v1.0.0 -> v1.1.0 |
 | `perf: remove graphiteWidth option`<br><br>`BREAKING CHANGE: The graphiteWidth option has been removed.`<br>`The default graphite width of 10mm is always used for performance reasons.` | ~~Major~~ Breaking Release | v1.0.0 -> v2.0.0 |
 | `chore: update packages` | No Release | v1.0.0 -> v1.0.0 |

## License

This project is licensed under the terms of the [MIT license](https://github.com/moneyforward/cloud-react-ui/blob/main/LICENSE.txt).
