const router = require('express').Router();
const userChats = require('../models/userMapping');
router.post('/', async (req, res)=>{
    const { Uid } = req.body;
   let usersFriends =  await userChats.find({
        $or: [
            {
                Uid1: Uid
            },
            {
                Uid2: Uid
            }
        ]
    })
    

})