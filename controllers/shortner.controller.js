const Shortner = require("../models/shortnerSchema");
const { generateRandomString } = require("../utils/generate");
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
    });

    await urlData.save();

    res.status(201).send({
      longUrl: urlData.longUrl,
      shortUrl: urlData.shortUrl,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal server error" });
  }
};

const redirectUrl = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(400).send({ message: "Url is required" });

    const existUrl = await Shortner.findOne({ shortUrl: id });
    if (!existUrl) return res.status(400).send({ message: "Url not exist" });

    res.redirect(existUrl.longUrl);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { createShortUrl, redirectUrl };
