import fs from 'fs'
import ejs from 'ejs'
import { fileURLToPath } from 'node:url'
import path from 'path'
import prettier from 'prettier'

export default () => {
    const __dirname = fileURLToPath(import.meta.url)

    const mainTemplate = fs.readFileSync(path.resolve(__dirname, '..', '../templates/main.ejs'))

    const code = ejs.render(mainTemplate.toString(), {})

    return prettier.format(code, { parser: 'babel' })
}
