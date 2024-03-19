#!/usr/bin/env node
import { $, cd } from 'zx/core';
import chalk from 'chalk';
const createProject = async (appName) => {
    console.log(chalk.bgBlue('\n Running react-native@latest init \n'));
    try {
        const { message } = await $ `npx react-native@latest init ${appName} --install-pods false`;
        console.log(chalk.blueBright(message));
    }
    catch (error) {
        console.log(chalk.red(error));
    }
    finally {
        cd(`${appName}`);
    }
};
const installPackages = async ({ packageManager, packages, }) => {
    console.log(chalk.bgBlue('\n Install packages \n'));
    const defaultPackages = [
        '@react-navigation/native',
        'react-native-screens',
        'react-native-safe-area-context',
    ];
    const allPackages = [...defaultPackages, ...packages];
    await $ `${packageManager} install ${allPackages}`;
};
const installDevDependencies = async ({ packageManager, }) => {
    console.log(chalk.bgBlue('\n Install dev dependencies \n'));
    const packages = ['husky', 'lint-staged'];
    await $ `${packageManager} install ${packages} -D`;
};
const setupHusky = async () => {
    console.log(chalk.bgBlue('\n Setup husky \n'));
    await $ `npx husky init && echo "#!/bin/sh
  . "$(dirname "$0")/_/husky.sh"
  
  npx --no-install lint-staged`;
};
export const create = async ({ appName, packageManager, packages, }) => {
    await createProject(appName);
    await installPackages({ packageManager, packages });
    await installDevDependencies({ packageManager });
    await setupHusky();
    console.log(chalk.greenBright(`
      Created your new React Native app with settings. \n
      cd into ${appName} to get started.
    `));
    return true;
};
