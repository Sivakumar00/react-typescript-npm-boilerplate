# react-typescript-npm-boilerplate

![react-typescript-npm-boilerplate](https://user-images.githubusercontent.com/32809581/135594096-a2378f7e-1a16-45a2-845c-824510554845.png)

### Start your next react typescript npm package project in seconds
A highly scalable, focus on performance and best practices

[![Open in Visual Studio Code](https://open.vscode.dev/badges/open-in-vscode.svg)](https://open.vscode.dev/Sivakumar00/react-typescript-npm-boilerplate)
##### Browse in [Github1s](https://github1s.com/Sivakumar00/react-typescript-npm-boilerplate)
---
### Built with
- [ReactJS v17.0.2](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Story Book](https://storybook.js.org/)
- [Husky-Git hooks](https://github.com/typicode/husky)
- [Jest](https://jestjs.io/)
- [Rollup.js](https://rollupjs.org/)
- [Faker.js](https://github.com/marak/Faker.js/)
-  and some ✨Magic ✨


## Usage

This boilerplate requires [Node.js](https://nodejs.org/) v10+ to run.

Install the dependencies and devDependencies and start the storybook.


```sh
git clone <clone url>
cd react-typescript-npm-boilerplate
npm i
npm run storybook
```


For production build

```sh
npm run build
```

For unit testing

```sh
npm run test
```


For unit test & generate JUnit report

```sh
npm run test:junit
```


For lint check and fix

```sh
npm run lint
npm run lint:fix
```


For build storybook

```sh
npm run build-storybook
```


#### How git commit works?


Since we are using [Conventional-commits](https://github.com/conventional-changelog/commitlint). There should be subject mentioned in the below list.

```sh
git commit -m "<subject>: <message>"
```

For example:
```sh
git commit -m "chore: commit message here"
```


##### List of commit subjects:

- build
- ci
- chore
- docs
- feat
- fix
- perf
- refactor
- revert
- style
- test

##### Pre-commit checks

Everytime you commit the code, there will be following checks:
 - Eslint check
 - Prettier format check
 - Unit test check
 - Build success check

> You can add/remove the checks in .husky/pre-commit file




## License
MIT (Free software)

