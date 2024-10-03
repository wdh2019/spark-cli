function checkDependencies(name, dependencies) {
    return dependencies.indexOf(name) !== -1
}

export const createConfig = (answers) => {
    return {
        projectName: answers.projectName,
        port: answers.port,
        dependencies: {
            router: checkDependencies('vue-router', answers.dependencies),
            store: checkDependencies('pinia', answers.dependencies),
        },
    }
}
