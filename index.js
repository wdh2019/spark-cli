import fs from 'fs'
import createHtmlTemplate from './createHtmlTemplate.js'
import createMainTemplate from './createMainTemplate.js'
import createAppTemplate from './createAppTemplate.js'


/** 1. 创建项目文件夹  */
fs.mkdirSync('my-project')

/** 2. 创建模版html文件index.html */
fs.writeFileSync(`${getRootPath()}/index.html`, createHtmlTemplate())

/** 3. 创建入口文件main.js */
fs.writeFileSync(`${getRootPath()}/main.js`, createMainTemplate())

/** 4. 创建vue模版App.vue */
fs.writeFileSync(`${getRootPath()}/App.vue`, createAppTemplate())

/** 5. 创建package.json */
fs.writeFileSync(`${getRootPath()}/package.json`, `package.json`)

/** 6. 安装依赖 */


function getRootPath() {
    return 'my-project'
}