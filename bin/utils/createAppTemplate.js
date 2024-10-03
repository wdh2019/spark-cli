import fs from 'fs'
import ejs from 'ejs'
import { fileURLToPath } from 'node:url'
import path from 'path'

export default () => {
    const __dirname = fileURLToPath(import.meta.url)

    const appTemplate = fs.readFileSync(path.resolve(__dirname, '..', '../templates/app.ejs'))

    const code = ejs.render(appTemplate.toString(), {
        
    })

    return code
}