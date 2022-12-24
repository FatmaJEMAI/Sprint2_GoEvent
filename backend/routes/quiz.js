var express = require('express');
var router = express.Router();
var db=require('../models')
const quiz= require('../controllers/quiz.controller');
const { application } = require('express');


router.get('/affiche',quiz.getAllquiz);

router.post('/add',quiz.createquiz);
router.get('/:quizId',quiz.getquizById);

router.get('/affiche',(req,res)=>{
    db.quiz.create(req.body).then( (response) =>{
    res.status(200).send(response)}).catch((err)=>{
    res. status(400).send(err)
    })
    });
router.put('/update/:id', (req,res)=>{
db.quiz.update(req. body, {where: {id:req.params.id}}).then((response)=>{
return res.status(200).json(response)}).catch((err)=>{
return res.status(400).json(err.message)
})
});
router.delete('/remove/:id',(req,res)=>{
    db.quiz.destroy({where: {id:req.params.id}}).then((response)=>{
      return  res.status(201).json(response)}).catch((err)=>{
        return res.status(400).json(err)
    })
});


     module.exports=router;



    //  put(product:Product,id:any):Observable<Product>{
    //   return this.http.put<Product>(this.productsUrl+"/"+id,product,this.httpOptions)
    // }
