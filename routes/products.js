const express = require('express');
const {createProduct,getProductById,updateProduct,deleteProduct, getAllProduct} = require('../controller/productController')
const cache = require('../middleware/cache')
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Checkpoint Api products');
});

router.post('/product', createProduct)
router.get('/product', cache, getAllProduct)
router.get('/product/:id', cache, getProductById)
router.put('/product/:id', updateProduct)
router.delete('/product/:id', deleteProduct)

module.exports = router;
