import inquirer from 'inquirer'
import projectName from './projectName.js'
import port from './port.js'
import dependencies from './dependencies.js'

export default () => {
    return inquirer.prompt([projectName(), port(), dependencies()])
}
