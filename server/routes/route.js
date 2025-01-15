const express = require("express");
const {
 getAllData ,
  getProductById,
  deleteProduct,
  addNewData,
  updateData,
} = require("..//controllers/datacontroller.js");

const router = express.Router();

router.get("/",  getAllData );
router.get("/:id", getProductById);
router.delete("/:id", deleteProduct);
router.post("/", addNewData);
router.put("/:id", updateData);

module.exports = router;