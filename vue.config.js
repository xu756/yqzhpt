module.exports = {
  publicPath: "./",
  assetsDir: "static",
  transpileDependencies: true,
  // 跨域支持
  devServer: {
    proxy: {
      "/api": {
        target: "http://127.0.0.1:7564/api",
        changeOrigin: true, // 允许跨域
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  }
};