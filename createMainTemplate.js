import fs from 'fs'
import ejs from 'ejs'

export default () => {
    const mainTemplate = fs.readFileSync('./templates/main.ejs')

    const code = ejs.render(mainTemplate.toString(), {
       
    })

    return code
}