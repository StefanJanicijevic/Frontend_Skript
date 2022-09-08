const { defineConfig } = require('@vue/cli-service')
const cors = require('cors');


module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  devServer: {
    proxy: 'http://localhost:8080'
  }
})
