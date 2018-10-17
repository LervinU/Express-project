const express =  require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const connection = require('../src/dbConnection');

//Body parser middleware
router.use(bodyParser.urlencoded({ extended: false }))

 router.get('/', (req, res) => {

    var productList= [];

    connection.query('SELECT * FROM Allproducts', (err, rows, fields) => {
        if(err) {
            console.log(err);
        } else {
            
             for(var i = 0 ; i < rows.length; i++) {
                var product = {
                    'id': rows[i].id,
                    'product_name': rows[i].product_name,
                    'quantity': rows[i].quantity,
                    'product_value': rows[i].product_value,
                    'description': rows[i].description
                }
                // add the product to the product list
                productList.push(product);
                
            }
            //console.log(productList);
            res.render('frontpage', {"productList": productList});
            
        }

    });
    
}); 

/*router.get('/:page', (req, res, next) => {
    const perPage = 9;
    let page = req.params.page || 1 ;

    let productList = [];
    let product;
    connection.query('SELECT * FROM Allproducts', (err, rows, fields) => {
        if(err) {
            console.log(err);
        } else {
            
             for(var i = 0 ; i < rows.length; i++) {
                    product = {
                    'id': rows[i].id,
                    'product_name': rows[i].product_name,
                    'quantity': rows[i].quantity,
                    'product_value': rows[i].product_value,
                    'description': rows[i].description
                }
                // add the product to the product list
                productList.push(product);  
                
            }
            //console.log(productList);
            //res.render('frontpage', {"productList": productList});
            
        }

    });
    
    product
         .find({}) 
        .skip((perPage * page) - perPage)
        .limit(perPage)
        .exec((err, productList) => {
            product.count().exec((err, count) => {
                if(err) return next(err);
                res.render('frontpage', {
                    productList: productList,
                    current: page,
                    pages: Math.ceil(count/ perPage)
                });
            });
        });
}); */

router.get('/add_product', (req, res) => {
    res.render('add_product');
});

// Add new item to the table 
router.post('/add_product', (req, res) => {
    
    const { product, qty, val, description } =  req.body;
    connection.query('INSERT INTO Allproducts SET ?', {
        product_name: product,
        quantity: qty,
        product_value: val,
        description: description

    }, (err, result) => {
        if(err) {
            console.log(err)
        } else {
            res.redirect('/');
        }
    });

});



module.exports = router;


