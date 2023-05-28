const express = require('express');
const mongoose = require('mongoose');
const app = express();

const MONGODB_PASSWORD = '6Kri5M7jgggFv86T';
const MONGODB_URI = `mongodb+srv://root:${MONGODB_PASSWORD}@danikokoapi.d5xg6bc.mongodb.net/?retryWrites=true&w=majority`;

const Product = require('./models/productModel');

/** Indicate Express app can accept JSON */
app.use(express.json());
/** Indicate Express app can accept JSON */

/** Indicate Express app can accept form data */
app.use(express.urlencoded({
    extended: false
}));
/** Indicate Express app can accept form data */

/** Routes */
app.get('/', (req, res) => {
    res.send([{name: 'Daniel'}, {name: 'Koko'}]);
});

app.get('/blog', (req, res) => {
    res.send(
        {
            status: 200,
            data: [
                {
                    subject: 'Self Biography',
                    body: 'My name is Daniel and I am glad to be writing at this time.',
                    tags: [
                        'Coding',
                        'Bio'
                    ]
                }
            ]
        }
    );
});

// Fetch all products
app.get('/products', async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (ERROR) {
        res.status(500).json({
            message: ERROR.message
        });
    }
});

// Fetch a product by ID
app.get('/products/:id', async (req, res) => {
    try {
        const { id }  = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch (ERROR) {
        res.status(500).json({
            message: ERROR.message
        });
    }
});

// Update a product
app.patch('/products/:id', async (req, res) => {
    try {
        const { id }  = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        if (!product) {
            return res.status(404).json({
                message: `Cannot find any product with ID ${id}`
            });
        }
        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct``);
    } catch (ERROR) {
        res.status(500).json({
            message: ERROR.message
        });
    }
});

// Create a new product
app.post('/products', async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);

    } catch (ERROR) {
        console.log(ERROR.message);
        res.status(500).json({
            message: ERROR.message
        });
    }
});
/** Routes */

/** MongoDB connection */
mongoose
.connect(MONGODB_URI)
.then(() => {
    console.log('Connected to MongoDB successfully.');
    app.listen(3000, () => {
        console.log('Node API app is running on port 3000.');
    });
})
.catch((ERROR) => {
    console.log(ERROR);
});
/** MongoDB connection */