//const express=require('express')
const {getProduit}=require('../controllers/getProduit')
const {Router}=require('express')
const route=Router()
//define path ll fun bch nfhem li fiha function
route.get('/fetch',getProduit)
module.exports = route;