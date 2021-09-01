const admin = require("firebase-admin");

const { config } = require("../../config");

admin.initializeApp({
  credential: admin.credential.cert(config.firebase.certConfig),
});

const auth = admin.auth();

const verifyIdToken = (token) => {
  return auth.verifyIdToken(token);
};

module.exports = {
  admin,
  auth,
  verifyIdToken,
};
