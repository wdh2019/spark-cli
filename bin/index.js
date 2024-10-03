#!/usr/bin/env node

import fs from 'fs'
import { execa } from 'execa'
import chalk from 'chalk'
import createHtmlTemplate from './utils/createHtmlTemplate.js'
import createMainTemplate from './utils/createMainTemplate.js'
import createAppTemplate from './utils/createAppTemplate.js'
import createPackageTemplate from './utils/createPackageTemplate.js'
import createViteConfigTemplate from './utils/createViteConfigTemplate.js'
import question from './questions/index.js'
import { createConfig } from './utils/config.js'

const answers = await question()

const inputConfig = createConfig(answers)

/** 1. 创建项目文件夹  */
console.log(chalk.blue(`📁 创建项目文件夹 -> ${inputConfig.projectName}`))
fs.mkdirSync(inputConfig.projectName)

/** 2. 创建模版html文件index.html */
console.log(chalk.blue(`📄 创建模版html文件 -> index.html`))
fs.writeFileSync(`${getRootPath()}/index.html`, await createHtmlTemplate(inputConfig))

/** 3. 创建入口文件main.js */
console.log(chalk.blue(`📄 创建入口文件 -> main.js`));
fs.writeFileSync(`${getRootPath()}/main.js`, await createMainTemplate(inputConfig))

/** 4. 创建vue模版App.vue */
console.log(chalk.blue(`🚀 创建App.vue`))
fs.writeFileSync(`${getRootPath()}/App.vue`, createAppTemplate(inputConfig))

/** 5. 创建package.json */
console.log(chalk.blue(`📦 创建package.json`))
fs.writeFileSync(`${getRootPath()}/package.json`, await createPackageTemplate(inputConfig))

/** 6. 创建vite.config.js */
console.log(chalk.blue(`🔧 创建vite.config.js`))
fs.writeFileSync(`${getRootPath()}/vite.config.js`, await createViteConfigTemplate(inputConfig))

/** 7. 安装依赖 */
console.log(chalk.blue(`🚀 安装依赖`));
execa('pnpm', ['install'], {
    cwd: getRootPath(),
    stdio: [2, 2, 2] // 将子进程的标准输入、标准输出和标准错误，都重定向到父进程的的标准输出流
})

function getRootPath() {
    return inputConfig.projectName
}
