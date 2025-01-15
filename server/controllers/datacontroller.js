const ProductModel = require("../models/models.js");


const getAllData = async (req,res) =>{
    try {
        const products = await ProductModel.find({});
        res.status(200).json(products);
      } catch (error) {
        res.status(500).send({ message: error.message });
      }
}

const getProductById = async (req, res) => {
    //   const id = req.params.id; 
    const { id } = req.params;
    try {
      const product = await ProductModel.findById(id);
      if (!product) {
        return res.status(404).json({ message: "product not found!" });
      }
      res.status(200).json(product);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  };
  const deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
      const product = await ProductModel.findByIdAndDelete(id);
      if (!product) {
        return res.status(404).json({ message: "product not found!" });
      }
      res.status(200).json({
        message: "deleted successfully!",
        deletedProdouct: product,
      });
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  };
  
  const addNewData = async (req, res) => {
    // console.log(req.body);
  
    try {
      const newProduct = ProductModel({ ...req.body });
      await newProduct.save();
      res.json({ message: "product added successfully", newProduct: newProduct });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  const updateData = async (req, res) => {
    const { id } = req.params;
    try {
      const updatedProduct = await ProductModel.findByIdAndUpdate(
        id,
        {
          ...req.body,
        },
        { new: true }
      );
      if (!updatedProduct) {
        return res.status(404).json({ message: "product not found!" });
      }
      res.json({
        message: "product updated successfully",
        updatedProduct: updatedProduct,
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  module.exports = {
    getAllData,
    getProductById,
    deleteProduct,
    addNewData,
    updateData,
  };