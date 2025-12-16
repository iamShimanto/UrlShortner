const { verifyToken } = require("../utils/tokens");

const isAuthenticate = (req, res, next) => {
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

const authMiddleware = (req, res, next) => {
  try {
    const token = req.headers.access_token;

    const decoded = verifyToken(token);
    if (!decoded)
      return res.status(400).send({ message: "Unauthorized access" });

    req.user = decoded;
    next();
  } catch (error) {
    res.status(500).send({ message: "Unauthorized Request" });
  }
};

module.exports = { isAuthenticate, authMiddleware };
