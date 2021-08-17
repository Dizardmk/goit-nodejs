const jimp = require('jimp');

module.exports = async (imagePath) => {
  const image = await jimp.read(`${imagePath}`);
  await image.resize(250, jimp.AUTO);
  return await image.writeAsync(`${imagePath}`);
};
