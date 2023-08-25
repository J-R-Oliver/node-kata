# node-kata

[![Build](https://github.com/J-R-Oliver/node-kata/actions/workflows/build.yaml/badge.svg)](https://github.com/J-R-Oliver/node-kata/actions/workflows/build.yaml)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-%23FE5196?logo=conventionalcommits&logoColor=white)](https://conventionalcommits.org)
[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)

<table>
<tr>
<td>
Repository for Node.js katas.
</td>
</tr>
</table>

## Contents

- [Getting Started](#getting-started)
- [Testing](#testing)
- [Conventional Commits](#conventional-commits)
- [GitHub Actions](#github-actions)

## Getting Started

### Prerequisites

To install and modify this project you will need to have:

- [Node.js](https://nodejs.org/en/)
- [Git](https://git-scm.com)

### Installation

To start, please `fork` and `clone` the repository to your local machine.

## Testing

All tests have been written using [Jest](https://jestjs.io). To run the tests execute:

```shell
npm test
```

Code coverage is also measured by `Jest` and set to a minimum of 95%. To run tests with coverage execute:

```shell
npm run test:coverage
```

Code coverage reports can be found in the `/coverage/` directory.

## Conventional Commits

This project uses the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification for commit
messages. The specification provides a simple rule set for creating commit messages, documenting features, fixes, and
breaking changes in commit messages.

A [pre-commit](https://pre-commit.com) [configuration file](.pre-commit-config.yaml) has been provided to automate
commit linting. Ensure that *pre-commit* has been [installed](https://www.conventionalcommits.org/en/v1.0.0/) and
execute...

```shell
pre-commit install
````

...to add a commit [Git hook](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks) to your local machine.

An automated pipeline job has been [configured](.github/workflows/build.yml) to lint commit messages on a push.

## GitHub Actions

CI/CD pipelines has been created using [GitHub Actions](https://github.com/features/actions) to automated tasks such as
linting, testing, and releasing.

### Build Workflow

The [build](./.github/workflows/build.yml) workflow handles integration tasks. This workflow consists of two jobs, `Git`
and `Node`, that run in parallel. This workflow is triggered on a push to a branch.

#### Git

This job automates tasks relating to repository linting and enforcing best practices.

#### Node

This job automates `Node.js` specific tasks.
