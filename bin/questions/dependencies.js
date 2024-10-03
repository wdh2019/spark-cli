export default () => ({
    type: 'checkbox',
    name: 'dependencies',
    message: '请选择要额外安装的依赖',
    choices: ['vue-router', 'pinia'],
})
