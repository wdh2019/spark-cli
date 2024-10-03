import fs from 'fs'
import ejs from 'ejs'

export default () => {
    const htmlTemplate = fs.readFileSync('./templates/html.ejs')

    const code = ejs.render(htmlTemplate.toString(), {
        projectName: 'my-project'
    })

    return code
}