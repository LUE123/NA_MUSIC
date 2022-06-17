module.exports = {
    //关闭eslint
    lintOnSave:false,
    //代理跨域
    devServer: {
        proxy: {
            "/api": {     //url中有/SongListDetails就代理 
                target: "https://netease-cloud-music-api-new-snowy.vercel.app/",   //target 目标服务器的ip地址（数据来源）
                changeOrigin: true, // 允许跨域
                pathRewrite: {
                    '^/api': '' // 重写请求
                }
            }
        }
    },
    publicPath:'/',
}