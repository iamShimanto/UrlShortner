const Shortner = require("../models/shortnerSchema");
const { generateRandomString } = require("../utils/generate");
const getDeviceInfo = require("../utils/getDeviceInfo");
const { isUrlValid } = require("../utils/validator");

const createShortUrl = async (req, res) => {
  try {
    const { longUrl } = req.body;

    if (!longUrl) return res.status(400).send({ message: "Url is required" });
    if (!isUrlValid(longUrl))
      return res.status(400).send({ message: "Enter a valid url" });

    const shortUrl = generateRandomString();

    const urlData = new Shortner({
      longUrl,
      shortUrl,
      user: req.user?.id,
    });

    await urlData.save();

    res.status(201).send({
      longUrl: urlData.longUrl,
      shortUrl: urlData.shortUrl,
    });
  } catch (error) {
    res.status(500).send({ message: "Internal server error" });
  }
};

const redirectUrl = async (req, res) => {
  try {
    const { id } = req.params;

    const existUrl = await Shortner.findOne({ shortUrl: id });

    if (!existUrl) return res.redirect(process.env.CLIENT_URL + "/" + id);

    const info = getDeviceInfo(req);
    const history = {
      visitTime: Date.now(),
      deviceType: info.deviceType,
      os: info.os,
      browser: info.browser,
    };

    if (existUrl.user) {
      existUrl.visitHistory.push(history);
      await existUrl.save();
    }

    res.redirect(existUrl.longUrl);
  } catch (error) {
    res.status(500).send({ message: "Internal sever error" });
  }
};

const getAllUrl = async (req, res) => {
  try {
    const user = req.user;

    const userdata = await Shortner.find({ user: user.id }).select("-user");

    if (userdata.length === 0)
      return res.status(400).send({ message: "Empty Url" });

    res.status(200).send(userdata);
  } catch (error) {
    res.status(500).send({ message: "Internal server error" });
  }
};

module.exports = { createShortUrl, redirectUrl, getAllUrl };
