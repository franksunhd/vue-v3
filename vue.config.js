module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? './vue-next' : './', // 服务器的子路径
    outputDir: './dist', // 打包之后放到dist目录下
    lintOnSave: false, // eslint警告
    productionSourceMap: false, // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建
    css: {
        extract: false, // 是否将组件中的 CSS 提取至一个独立的 CSS 文件中 (而不是动态注入到 JavaScript 中的 inline 代码)
        sourceMap: false, // 是否为 CSS 开启 source map。设置为 true 之后可能会影响构建的性能。
    },
    devServer: {
        proxy: 'https://localhost:4000', // 和后端的接口代理设置
        // port: 8080, // 端口号
        // host: 'localhost', //
        https: false, // 是否开启https
        open: false, // 配置是否自动启动浏览器
        disableHostCheck: false,
    },
    // 第三方的插件
    pluginOptions: {}
};
