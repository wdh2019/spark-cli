import fs from 'fs'
import ejs from 'ejs'
import { fileURLToPath } from 'node:url'
import path from 'path'
import prettier from 'prettier'

export default (config) => {
    const __dirname = fileURLToPath(import.meta.url)

    const viteConfigTemplate = fs.readFileSync(path.resolve(__dirname, '..', '../templates/vite-config.ejs'))

    const code = ejs.render(viteConfigTemplate.toString(), {
        port: config.port,
    })

    return prettier.format(code, { parser: 'babel' })
}
