const express = require("express");
const router = express.Router();

const multer = require("multer");
const overall = require("../controllers/overall");
const { Category, subCategory } = require("../models/overall");
const destination_store = require('../controllers/destination')
const dest = require('../models/destination')
const verifyToken = require("../middleware/jwtauthmiddleware")
const generatedToken = require("../controllers/generatedToken")

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    return cb(null, `${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

router.get("/place", (req, res) => {
  res.json({ message: "Places", user: req.user });
});

router.get("/dest" , async(req,res)=>{
  try{
    const {name} = req.query
  const subcategory = await subCategory.findOne({name : {$regex : name , $options : "i"}})
  if(!subcategory){
    return res.status(404).json({message : "subcategory not found"})
  } 
  const dests = await dest.find({subcategory_id : subcategory._id})
  return res.status(200).json(dests)
  }catch{
    res.status(500).json({message : "server error"})
  }
  
})

router.get("/topic_category", async (req, res) => {
  try {
    const { type } = req.query;
    const category = await Category.find({
      type: { $regex: type, $options: "i" },
    });
    res.json({ category });
  } catch (err) {
    console.error("Error fetching category:", err);
    res.status(500).json({ error: "Server error" });
  }
});

router.get("/", async (req, res) => {
  const { topic_category, type } = req.query;
  const category = await Category.findOne({
    type: { $regex: type, $options: "i" },
    topic_category: { $regex: topic_category, $options: "i" },
  });
  const subcategory = await subCategory.find({ category_id: category._id });
  res.json({ subcategory });
});

router.get("/subcategory", async (req, res) => {
  try {
    const {name} = req.query
    // console.log(name)
    const response = await subCategory.find({name :{$regex : name , $options : "i"}});
    // console.log(response)
    res.json({ response });
  } catch (err) {
    console.error(err);
  }
});

router.get("/loginpage",(req,res)=>{
  res.render("login")
})
router.post("/login" , generatedToken)

router.post("/destination", verifyToken , upload.single("dest_img"), destination_store)
router.post("/overall", verifyToken , upload.single("image"), overall);

router.get("/form/dest" ,verifyToken , (req,res)=>{
   res.render("uploaddest")
})
router.get("/form/place",verifyToken , (req, res) => {
  res.render("index");
});

module.exports = router;
