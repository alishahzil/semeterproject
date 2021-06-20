const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const Owner = require('../../model/owner');
const bcrypt = require('bcryptjs');


//@route POST /Createuser
//@desc creating user account
//@access public

router.post('/createowner',
 check('name','name is requried').not().isEmpty(),
 check('address','address is requried').not().isEmpty(),
 check('email','email is requried').isEmail(),
 check('password','password is requried').isLength({ min: 6 }),
 async (req,res)=>{
     const errors =  validationResult(req);
     if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const {email,name,address,password} = req.body;
      try {
        let ownerisexist = await Owner.findOne({ email });

        if (ownerisexist) {
          return res
            .status(400)
            .json({ errors: [{ msg: 'Account is already created' }] });
        }
          const owner = new Owner({
              name,
              email,
              address,
              password,
          });
          const salt = await bcrypt.genSalt(10);
          owner.password = await bcrypt.hash(password, salt);
          const result = await owner.save();
          res.json(result);
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }

 }
);



// @route    POST owner/login
// @desc     Login user profile
// @access   Public,
router.post(
  '/login',
  check('email', 'Please include a valid email').isEmail(),
  check('password', 'Password is required').exists(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      let owner = await Owner.findOne({ email });

      if (!owner) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid Credentials' }] });
      }

      const isMatch = await bcrypt.compare(password, owner.password);

      if (!isMatch) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid Credentials' }] });
      }else{
        return res.json('true');
      }

     
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

module.exports = router;


