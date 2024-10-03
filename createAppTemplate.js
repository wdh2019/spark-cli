import fs from 'fs'
import ejs from 'ejs'

export default () => {
    const appTemplate = fs.readFileSync('./templates/app.ejs')

    const code = ejs.render(appTemplate.toString(), {
        
    })

    return code
}