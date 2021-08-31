const { admin, auth, verifyIdToken } = require("./firebase");
const { getAuthToken } = require("./getAuthToken");

module.exports = {
  admin,
  auth,
  verifyIdToken,
  getAuthToken,
};
