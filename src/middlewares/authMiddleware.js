const { getAuthToken, verifyIdToken } = require("../services/firebase");
const db = require("../models");

const authMiddleware = async (req, res, next) => {
  try {
    const bearerToken = await getAuthToken(req.headers);
    const userClaims = await verifyIdToken(bearerToken);

    const { email, uid } = userClaims;
    req.user = {
      email: email,
      uid: uid,
    };

    next();
  } catch (error) {
    res.status(401).send({
      data: null,
      error: error,
    });
  }
};

module.exports = {
  authMiddleware,
};
