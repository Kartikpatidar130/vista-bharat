const express = require("express");
const dest = require("../models/destination");
const { subCategory } = require("../models/overall");
const uploaded = require("../utils/cloudinary")

const destination_store = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }
    const img_url = await uploaded(req.file.path);
    // console.log(img_url);

    // console.log(req.body);
    const { name, dest_name, dest_info } = req.body;
    // console.log(name);
    // console.log(dest_name);
    // console.log(dest_info);

    const subcategory = await subCategory.findOne({
      name: { $regex: name, $options: "i" },
    });
    // console.log(subcategory);
    if (!subcategory) {
      return res.status(404).json({ message: "Subcategory not found" });
    }

    const dest_names = await dest.findOne({ dest_name });
    if (!dest_names) {
      const destination = await dest.create({
        subcategory_id: subcategory._id,
        dest_name,
        dest_img: img_url,
        dest_info,
      });
    res.status(201).json({ destination });
    }

    res.json({ message : "destination name already exits "});
  } catch (err) {
    console.error(err);
  }
};

module.exports = destination_store;
