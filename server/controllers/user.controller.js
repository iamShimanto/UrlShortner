const { isEmailValid, isPasswordStrong } = require("../utils/validator");
const userSchema = require("../models/userSchema");
const { generateToken } = require("../utils/tokens");

const registerUser = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;
    if (!fullName)
      return res.status(400).send({ message: "fullName is required" });
    if (!email) return res.status(400).send({ message: "email is required" });
    if (!isEmailValid(email))
      return res.status(400).send({ message: "Enter a valid email" });
    if (!password)
      return res.status(400).send({ message: "password is required" });
    if (!isPasswordStrong(password))
      return res.status(400).send({ message: "use strong password" });

    const existUser = await userSchema.findOne({ email });
    if (existUser)
      return res.status(400).send({ message: "User already exist" });

    const user = new userSchema({
      fullName,
      email,
      password,
    });
    await user.save();

    user.password = undefined;

    res.status(201).send({ message: "user registration successfully", user });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal server error" });
  }
};

const userLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email) return res.status(400).send({ message: "email not found" });
    if (!isEmailValid(email))
      return res.status(400).send({ message: "Enter a valid email" });
    if (!password)
      return res.status(400).send({ message: "Password is required" });

    const user = await userSchema.findOne({ email });

    if (!user) return res.status(400).send({ message: "User not found" });

    const checkPass = await user.comparePassword(password);
    if (!checkPass) {
      return res.status(401).send({ message: "wrong password" });
    }

    user.password = undefined;

    const token = await generateToken({
      id: user._id,
      email: user.email,
    });

    res.cookie("access_token", token);

    res.status(200).send({
      message: "user login successfully",
      userdata: {
        user,
        token,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal server error" });
  }
};

const getProfile = async (req, res) => {
  try {
    const user = req.user;

    const userdata = await userSchema.findById(user.id).select("-password");
    if (!userdata)
      return res.status(404).send({ message: "User profile not found" });

    res.status(200).send(userdata);
  } catch (error) {
    res.status(500).send({ message: "Internal server error" });
  }
};

const logOut = async (req, res) => {
  try {
    res.clearCookie("token");
    res.status(200).send({ message: "Logged Out" });
  } catch (error) {
    res.status(500).send({ message: "Internal server error" });
  }
};

module.exports = {
  registerUser,
  userLogin,
  getProfile,
  logOut,
};
