const redis = require('redis')
const client = redis.createClient()
const Product = require('../model/products')

module.exports = {
    createProduct :(req,res)=>{
        Product.create({
            name: req.body.name,
            price: req.body.price
        },(err,data)=>{
            if(err){
                res.status(500).json({
                    message:`add product error : ${err}`,
                    data: {}
                })
            }else{
                res.status(201).json({
                    message:`add product success`,
                    data:data
                })
            }
        })
    },
    getAllProduct:(req,res)=>{
        Product.find((err,data)=>{
            if(err){
                res.status(500).json({
                    message:`get list product error : ${err}`,
                    data: {}
                })
            }else{
                client.setex(`product:getAll`, 600, JSON.stringify(data))
                res.status(200).json({
                    message:`get list product success`,
                    data:data
                })
            }
        })
    },
    getProductById:(req,res)=>{
        Product.findById(req.params.id, (err,data)=>{
            if(err){
                res.status(500).json({
                    message:`product not found : ${err.message}`,
                    data: {}
                })
            }else{
                let info
                if(data == null) {
                    info = 'Product Not Found'
                } else{
                    client.setex(`product:${req.params.id}`, 600, JSON.stringify(data))
                    info = `Find Product Success`
                }
                res.status(200).json({
                    message: `${info}`,
                    data:data
                })
            }
        })
    },
    updateProduct:async (req,res)=>{
        try{
            let oldData = await Product.findById(req.params.id)
            Product.findByIdAndUpdate(req.params.id,{
                name: req.body.name || oldData.name,
                price: req.body.price || oldData.price
            },(err,data)=>{
                if(err){
                    res.status(500).json({
                        message: `failed updated product ${err}`,
                    })
                }else{
                    res.status(200).json({
                        message: `updated product success`,
                        data: data
                    })
                }
            })
        }catch(err){
            res.status(500).json({
                message: `something error when update data people ${err}`,
                data: {}
            })
        }
    },
    deleteProduct:(req,res)=>{
        Product.findByIdAndDelete(req.params.id,(err,data)=>{
            if(err){
                res.status(500).json({
                    message: `failed delete product :${err}`
                })
            }else{
                res.status(200).json({
                    message: `delete product success`,
                    data:data
                })
            }
        })
    }
}