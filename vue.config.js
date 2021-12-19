module.exports = {
  devServer: { // webpack config
    proxy: {
      api: {
        target: 'http://localhost:8000',
        changeOrigin: true,
      },
    },
  },
};
