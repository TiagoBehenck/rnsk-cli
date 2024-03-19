export const questions = [
    {
        type: 'input',
        name: 'appName',
        message: 'What name do you want to give your app?',
    },
    {
        type: 'list',
        name: 'packageManager',
        message: 'What package manager do you want to use?',
        choices: ['npm', 'yarn', 'pnpm', 'bun'],
    },
    {
        type: 'list',
        name: 'toolStyle',
        message: 'What tool for styling?',
        choices: ['styled-components', 'react-native-extended-stylesheet'],
    },
    {
        type: 'list',
        name: 'stateManager',
        message: 'What framework do you want to use?',
        choices: ['redux', 'mobx', 'zustand'],
    },
];
