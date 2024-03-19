# RNSK CLI

A CLI to create a React Native Project. 

Answer some questions and create a perfect project with just necessary!

This CLI was based on [`react-native-cli`](https://github.com/react-native-community/cli) 

Requires:
 
```
Node >= 18
NPM
```

Install: 

```bash
npm run build
```

```bash
npm install -g .
```

Usage: 

```bash
rnsk-cli
```

Questions: 

```bash
? What name do you want to give your app?
? What package manager do you want to use? [npm, yarn, pnpm, bun]
? What tool for styling? ['styled-components', 'react-native-extended-stylesheet']
? What framework do you want to use? ['redux', 'mobx', 'zustand']
```

Husky install by default with lint-staged

You choose only one option for each question.

This CLI create a new folder at the same path was run.

The CLI only installs dependencies, it does not configure them.