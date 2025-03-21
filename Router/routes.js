const express=require('express')
const router=express.Router()
const menuController=require('../Controllers/menuController')

router.post('/add-menu', menuController.addMenu);
router.get('/get-menu', menuController.getMenu);

module.exports=router