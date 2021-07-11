  
const express = require('express');
const router = express.Router();
const controllers = require("./../controllers/food")


router.get('/getfoods', controllers.GetFoods)
router.get('/getfood/:id', controllers.GetFoodID)
router.post('/createFood', controllers.CreateFood)
router.put('/updatefood/:id', controllers.UpdateFoodID)
router.delete('/deletefood/:id', controllers.DeleteFoodID)

router.get('/getowners', controllers.GetOwners)
router.post('/createOwner', controllers.CreateOwner)
//router.put('/updatefood/:id', controllers.UpdateFoodID)
router.delete('/deleteowner/:name', controllers.DeleteOwner)

module.exports =router