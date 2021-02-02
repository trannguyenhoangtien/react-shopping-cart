const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    const app = express();
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:5000',
      changeOrigin: true,
    })
  );
};