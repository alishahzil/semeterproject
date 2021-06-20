const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');
const Product = require('../../model/product');


//@route POST /createproduct
//@desc creating products 
//@access public

router.post('/createproduct',
 check('catagorie','catagorie is not selected is requried').not().isEmpty(),
 check('name','name is requried').not().isEmpty(),
 check('discription','discription is requried').not().isEmpty(),
 check('gender','gender is requried').not().isEmpty(),
 check('price','price is requried').not().isEmpty(),
 check('age','name is requried').not().isEmpty(),
 check('pic','pic is required').not().isEmpty(),

 async (req,res)=>{
     const errors =  validationResult(req);
     if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const {catagorie,name,discription,gender,price,age,pic} = req.body;
      try {
        
          const product = new Product({
              name: name,
              catagorie,
              discription,
              gender,
              price, 
              age,
              pic
          });
          const newcatagorie = await product.save();
          res.json(newcatagorie);
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }

 }
);

//@route GET /?search 
//@desc creating search engine 
//@access public


router.get('/search', async (req,res)=>{
    const page=parseInt(req.query.page);
    const limit = parseInt(req.query.limit);
    const search = req.query.id;
    const startIndex = (page - 1) * limit
  const endIndex = page * limit

  const results = {}
  try {
  if (endIndex < await Product.fuzzySearch(search).find().countDocuments().exec()) {
    results.next = {
      page: page + 1,
      limit: limit
    }
  }
  
  if (startIndex > 0) {
    results.previous = {
      page: page - 1,
      limit: limit
    }
  }
      results.results = await Product.fuzzySearch(search).limit(limit).skip(startIndex).exec();
      res.json(results);
 
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
    
  }
});
//@route GET /checkmale/:id 
//@desc creating search engine by male 
//@access public


router.get('/checkmale/:gender&:age&:id', async (req,res)=>{
  try {
    console.log(req.params.gender);
    const  search = await Product.fuzzySearch(req.params.id).find({$and:[{gender:req.params.gender},{age:{$lte:req.params.age}}]});

    res.json(search);
 
    

  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
    
  }
});


//@route Get /getproducts
//@des get random 13 product
//@access public

router.get('/getproduct',async (req,res)=>{
  const page = parseInt(req.query.page)
  const limit = parseInt(req.query.limit)

  const startIndex = (page - 1) * limit
  const endIndex = page * limit

  const results = {}
  try {
  if (endIndex < await Product.countDocuments().exec()) {
    results.next = {
      page: page + 1,
      limit: limit
    }
  }
  
  if (startIndex > 0) {
    results.previous = {
      page: page - 1,
      limit: limit
    }
  }

    results.results = await Product.find().limit(limit).skip(startIndex).exec();

    res.json(results);
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
})

router.get('/ownergetproduct',async (req,res)=>{
  try {
    const products = await Product.find({});
    console.log(products);
    res.json(products);
    
  } catch (error) {
    console.error(error.message);
    res.status.apply(404).send('Server Error');
  }

})

//@route Get /getproductby/:id
//@des get one product bu mongodb id
//@access public

router.get('/getproductby/:id',async (req,res)=>{
  try {
    const products = await Product.find({_id:req.params.id});
    res.json(products);
    
  } catch (error) {
    console.error(error.message);
    res.status.apply(404).send('Server Error');
  }

});
//@route Get /deleteproductby/:id
//@des delete product by id
//@access public

router.delete('/deleteproductby/:id',async (req,res)=>{
  try {
    
    const products = await Product.findById(req.params.id);
    if (!products) {
      return res.status(404).json({ msg: 'Post not found' });
    }
    await products.remove();

    res.json({ msg: 'Post removed' });
    
  } catch (error) {
    console.error(error.message);
    res.status.apply(404).send('Server Error');
  }

});




module.exports = router;