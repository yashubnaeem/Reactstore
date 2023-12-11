const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api', // Your API path
    createProxyMiddleware({
      target: 'https://fakestoreapi.com',
      changeOrigin: true,
     
    })
  );
};
