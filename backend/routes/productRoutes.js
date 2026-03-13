import express from "express";
const router=express.Router();
import {getproducts,getproductsById,
    createProduct,updateProduct,
    deleteProduct,createProductReview,
    getTopProducts
} from "../controller/productController.js"
import {protect,admin} from '../middleware/authMiddleware.js'
router.route('/').get(getproducts).post(protect,admin,createProduct);
router.route('/top').get(getTopProducts);
router.route('/:id').get(getproductsById).put(protect,admin,updateProduct).delete(protect,admin,deleteProduct);
router.route('/:id/reviews').post(protect,createProductReview);

export default router;