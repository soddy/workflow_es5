module.exports = {
    srcPath: './src/',
    devPath: './dev/',
    distPath: './dist/',
    serverPort: 8212,
    serverStartPath: '',
    serverReloadDelay: 500,
    replaceCssUrl: 'css/',
    verFlag: true,  //是否给js css添加随机版本号
    jsSuffix: '.js',
    imgLimit: 10240,
    cleanFile: [
        './dist/*'
    ],
    unCleanFile: [
        '!./dist/background',
        '!./dist/uploads',
        '!./dist/mobile'
    ]
}