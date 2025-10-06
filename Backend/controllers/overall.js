const { Category, subCategory } = require("../models/overall");
const uploaded = require("../utils/cloudinary");
const fs = require("fs");
const path = require("path");


const overall = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }


    const imageUrl = await uploaded(req.file.path);
    // console.log(imageUrl);

    fs.unlink(req.file.path, (err) => {
      if (err) console.error("Error deleting local file:", err);
    });
    
    const { topic_category, type, name, introduction, lifestyle, history } = req.body;

    let category = await Category.findOne({ topic_category });
    if (!category) {
      category = await Category.create({ topic_category, type });
    }

    let subcategory = await subCategory.findOne({
      category_id: category._id,
      name,
    });

    if (!subcategory) {
      subcategory = await subCategory.create({
        category_id: category._id,
        type,
        name,
        url_images: [imageUrl],
        introduction,
        lifestyle,
        history,
      });

      return res
        .status(201)
        .json({ message: "Subcategory created", category, subcategory });
    }
    
    const urlimages = subcategory.url_images.includes(imageUrl);
    if (!urlimages) {
      subcategory.url_images.push(imageUrl);
      subcategory.save();
      return res.json({ message: "URL added successfully", subcategory });
    }

    return res
      .status(200)
      .json({ message: "Already exists", category, subcategory });
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ message: "Upload failed", error: err.message });
  }
};

module.exports = overall;
