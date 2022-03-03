module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '81a5f0fc8d56181491810a3c9c093dc4'),
  },
});
