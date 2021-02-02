const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    const app = express();
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://ht-react-shopping-cart.herokuapp.com:5000',
      changeOrigin: true,
    })
  );
};