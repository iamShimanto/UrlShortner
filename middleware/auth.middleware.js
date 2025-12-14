const { verifyToken } = require("../utils/tokens");

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.headers.access_token;

    const decoded = verifyToken(token);
    if (!decoded)
      return res.status(400).send({ message: "Unauthorized access" });

    req.user = decoded;
    next();
  } catch (error) {
    next();
  }
};

module.exports = { authMiddleware };
