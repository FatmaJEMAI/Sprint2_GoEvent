var express = require('express');
var router = express.Router();
var db=require('../models')
const question= require('../controllers/question.controller');
const { application } = require('express');


router.get('/affiche',question.getAllquestion);

router.post('/add',question.createquestion);
router.get('/:questionId',question.getquestionById);
router.get('/affiche',(req,res)=>{
    db.question.create(req.body).then( (response) =>{
    res.status(200).send(response)}).catch((err)=>{
    res. status(400).send(err)
    })
    });
router.put('/update/:id', (req,res)=>{
db.question.update(req. body, {where: {id:req.params.id}}).then((response)=>{
return res.status(200).json(response)}).catch((err)=>{
return res.status(400).json(err.message)
})
});
router.delete('/remove/:id',(req,res)=>{
    db.question.destroy({where: {id:req.params.id}}).then((response)=>{
      return  res.status(201).json(response)}).catch((err)=>{
        return res.status(400).json(err)
    })
});


     module.exports=router;



    //  put(product:Product,id:any):Observable<Product>{
    //   return this.http.put<Product>(this.productsUrl+"/"+id,product,this.httpOptions)
    // }
