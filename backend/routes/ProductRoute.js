import express from "express"
import {
    getProduct,
    getProductByID,
    createProduct,
    updateProduct,
    deleteProduct,
} from "../controller/ProductController.js"

const router = express.Router()

router.get('/product', getProduct)
router.get('/product/:id', getProductByID)
router.post('/product', createProduct)
router.patch('/product/:id', updateProduct)
router.delete('/product/:id', deleteProduct)

export default router