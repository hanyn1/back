const mongoose=require('mongoose')
const {Schema}=mongoose
const product=new Schema({
name:String,
QrCode:Number
})

const produit=mongoose.model('Product', product)
module.exports={
    produit
}
