const ObjectId = require('mongoose').Types.ObjectId;

const Product  = require('../models/product');

const getProduct = (req, res) => {
    Product.aggregate([
        {
            $project: {
                product_name: 1,
                mfd: 1,
                exp: 1,
                price: 1,
                count: 1,
            }
        }
    ], (error, products) => {
        if (products.length > 0) {
            res.json({ status: true, message: 'Fetch successfully.', data: products });
        } else {
            res.json({ status: true, message: 'No data found.' })
        }
    })
}

const getProductById = (req, res) => {
    const productId = req.params.id;
    console.log(productId);

    Product.aggregate(
        [
            {
                $match: {
                    _id: ObjectId(productId)
                }
            },
            {
                $project: {
                    product_name: 1,
                    mfd: 1,
                    exp: 1,
                    price: 1,
                    count: 1,
                }
            }
        ], (error, product) => {
            console.log(error);
            console.log(product);
            if (product.length > 0) {
                res.json({ status: true, message: 'Fetch successfully.', data: product });
            } else {
                res.json({ status: true, message: 'Product id not exist.' });
            }
        }
    );
}

const createProduct = (req, res) => {
    const data = req.body;

    const newProduct = new Product({
        product_name: data.productName,
        count: data.productCount,
        mfd: data.mfd,
        price: data.price,
        exp: data.exp || '',
    });
    newProduct.save();

    res.json({ status: true, message: 'Product created.' })
}

const updateProduct = (req, res) => {
    const productId = req.params.id;
    const body = req.body;
    Product.findByIdAndUpdate({ "_id": productId }, body).then((data) => {
        res.json({ status: true, message: 'Product updated.', data: data })
    }).catch((error) => {
        res.json({ status: false, message: 'Error.', error: error })
    });
}

const deleteProduct = (req, res) => {
    const productId = req.params.id;

    Product.deleteOne({ _id: productId }).then(() => {
        res.json({ status: true, message: 'Product deleted.' });
    }).catch((error) => {
        res.json({ status: false, message: 'Error.', error: error });
    });
}

module.exports = {
    getProduct,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
}
