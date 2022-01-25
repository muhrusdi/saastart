module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '24f8b941307212823d9677a914397ed1'),
  },
});
