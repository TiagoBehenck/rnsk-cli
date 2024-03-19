#!/usr/bin/env node
import chalk from 'chalk'
import inquirer from 'inquirer'
import figlet from 'figlet'

import { create } from './react-native/index.js'
import { questions } from './question.js'

const makeQuestions = () => {
  return inquirer.prompt(questions)
}

const run = async () => {
  console.log(figlet.textSync('RNSK CLI', { font: 'Big Money-sw' }))

  const answer = await makeQuestions()
  const { appName, packageManager, toolStyle, stateManager } = answer

  if (!appName || appName.length <= 0) {
    console.log(chalk.red('Please enter a valid name for your new app.'))

    return process.exit(0)
  }

  const packages = [toolStyle, stateManager]

  const res = await create({ appName, packageManager, packages })

  if (!res) {
    console.log(chalk.red('There was an error generating your app.'))

    return process.exit(0)
  }

  return process.exit(0)
}

run()
