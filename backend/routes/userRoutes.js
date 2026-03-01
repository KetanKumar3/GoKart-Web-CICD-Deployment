const express = require('express')
const { adminLogin, addProduct, fetchProduct, userLogin, userSignup, userLogout, removeProduct, singleProduct, userProfile } = require('../controllers/userController')
const router = express.Router()
const upload = require('../middlewares/multer.js')

router.post('/admin/login',adminLogin)
router.post('/user/login',userLogin)
router.post('/user/signup',userSignup)
router.post('/user/logout',userLogout)
router.post('/product/add',upload.single("image"), addProduct)
router.post('/product/remove', removeProduct)
router.get('/shop', fetchProduct)
router.get("/shop/:id", singleProduct);
router.post("/profile", userProfile);

module.exports = router