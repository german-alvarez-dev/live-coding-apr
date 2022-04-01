
const express = require('express')
const router = express.Router()
const fs = require('fs')


router.get('/allProducts', (req, res) => {

    const allProducts = JSON.parse(fs.readFileSync("products.json"))
    res.json(allProducts)
})

router.get('/category/:categoryName', (req, res) => {
    const allProducts = JSON.parse(fs.readFileSync("products.json"))
    const filteredProducts = allProducts.filter(eachProduct => eachProduct.category === req.params.categoryName)
    res.json(filteredProducts)
})

router.get('/brand/:brandName', (req, res) => {
    const allProducts = JSON.parse(fs.readFileSync("products.json"))
    const filteredProducts = allProducts.filter(eachProduct => eachProduct.brand === req.params.brandName)
    res.json(filteredProducts)
})

module.exports = router