require("dotenv").config();
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
   timeout: 60000 
});

const uploaded = async (filepath) => {
  if (!filepath) return null;

  try {
    const response = await cloudinary.uploader.upload(filepath, {
      resource_type: "auto"});

    // console.log("Cloudinary upload response:", response);

    return response.secure_url;
  } catch (err) {
    console.error("Cloudinary upload error:", err);
    return null;
  }
};

module.exports = uploaded;
