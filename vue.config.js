module.exports = {
    publicPath: '/',
    // template를 변수로 만들어서 사용할 경우
    runtimeCompiler: true,
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "@/assets/scss/styles.scss";`
            }
        }
    },
}