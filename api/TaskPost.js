const express = require('express')
const { default: mongoose } = require('mongoose')
const router=express.Router()
const Task=require('./model/TaskModel')

//obtener todos los productos
router.get('/',(req,res)=>{
    Task.find()
    .then(result=>{
        res.status(200).json({
            result
        })
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({
            error:err
        })
    })
    
})


//añadir un producto
router.post('/',(req,res)=>{
    const newtask=new Task({
        _id:new mongoose.Types.ObjectId,
        nompro:req.body.nompro,
        desscripcion:req.body.desscripcion
    })
    newtask.save()
    .then(result=>{
        res.status(200).json({
            new_task:result
        })
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({
            error:err
        })
    })

})

//updatear un producto
router.put('/:id',(req,res)=>{
    Task.updateOne({_id:req.params.id},req.body)
    .then(result=>{
        res.status(200).json({
            upadatetask:result
        })
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({
            error:err
        })
    })
    
})

//borrar un producto
router.delete('/:id',(req,res)=>{
    Task.deleteOne({_id:req.params.id},req.body)
    .then(result=>{
        res.status(200).json({
            deletetask:result
        })
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({
            error:err
        })
    })
    
})


//obtener un producto
router.get('/:id',(req,res)=>{
    Task.find({_id:req.params.id})
    .then(result=>{
        res.status(200).json({
            task:result
        })
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({
            error:err
        })
    })
    
})

module.exports=router