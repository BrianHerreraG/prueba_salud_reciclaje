const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    proxy({
      target: 'https://apps.salud.com.sv:1009/reciclajeSocios',
      changeOrigin: true,
      secure: false,
      headers: {
        Authorization: 'Token 21539cd3697b4af3e4e997b1c1121e4ccad0b74d',
      },
    })
  );
};