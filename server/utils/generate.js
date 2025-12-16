const generateRandomString = (length = 5) => {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let randomString = "";

  for (let i = 0; i < length; i++) {
    const randomNumer = Math.floor(Math.random() * characters.length);
    randomString += characters[randomNumer];
  }
  return randomString;
};

module.exports = { generateRandomString };
