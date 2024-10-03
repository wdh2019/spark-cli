import fs from 'fs'
import ejs from 'ejs'
import { fileURLToPath } from 'node:url'
import path from 'path'
import prettier from 'prettier'

export default (config) => {
    const __dirname = fileURLToPath(import.meta.url)

    const packageTemplate = fs.readFileSync(path.resolve(__dirname, '..', '../templates/package.ejs'))

    const code = ejs.render(packageTemplate.toString(), {
        projectName: config.projectName,
        dependencies: config.dependencies,
    })

    return prettier.format(code, { parser: 'json' })
}
