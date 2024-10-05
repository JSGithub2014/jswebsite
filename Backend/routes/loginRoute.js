const express = require("express");
const router = express.Router();
const dbgr = require("debug")("development:loginRoute.js");


try{

    router.get("/login",(req,res)=>{
        dbgr("login page");
        res.status(200).json("Login route");
    })
}catch(err){
    dbgr(err.message);
};
module.exports = {loginRoute : router};