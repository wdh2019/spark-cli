import fs from 'fs'
import ejs from 'ejs'
import { fileURLToPath } from 'node:url'
import path from 'path'
import prettier from 'prettier'

export default (config) => {
    const __dirname = fileURLToPath(import.meta.url)

    const htmlTemplate = fs.readFileSync(path.resolve(__dirname, '..', '../templates/html.ejs'))

    const code = ejs.render(htmlTemplate.toString(), {
        projectName: config.projectName,
    })

    return prettier.format(code, { parser: 'html' })
}
