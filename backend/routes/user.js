var express = require('express');
const { getAllUsers, getUser, createUser, deleteUser, updateUser } = require('../controllers/user.controller');
//const validate = require('../middlewares/validator');
var router = express.Router();

router.get('/', getAllUsers);
router.get('/:userId', getUser);
router.post('/',  createUser);
router.put('/:userId', updateUser);
router.delete('/:userId', deleteUser);

module.exports = router;
// var express = require('express');
// const userModel = require("../models/user");
// var router = express.Router();
// var db = require('../models');
// const { response } = require('express');
// const { async } = require('rxjs');
// const user = require('../models/user');




// /* GET users listing. */
// router.get('/', async (req, res) => {
//   const users = await db.user.findAll();
//   res.json(users);
// });

// router.get('/fetch',(req,res)=>{
//   db.user.findAll().then((response)=>{
//     res.json(200).send(response)}).catch((err)=>{
//       res.json(400).send(err)
//   })

//   });

// router.get('/user/:id', (req, res) => {
//   db.user.findOne({ where: { id: req.params.id } }).then((response) => {
//     res.json(200).send(response)
//   }).catch((err) => {
//     res.json(400).send(err)
//   })

// });

// /* POST users listing. */
// router.post('/add', (req, res) => {
//   db.user.create(req.body).then((response) => {
//     res.json(200).send(response)
//   }).catch((err) => {
//     res.json(400).send(err)
//   })

// });


// /* UPDATE users listing. */
// router.put('/update/:id', (req, res) => {
//   db.user.update(req.body, { where: { id: req.params.id } }).then((response) => {
//     res.json(200).send(response)
//   }).catch((err) => {
//     res.json(400).send(err)
//   })


// });

// /* REMOVE users listing. */
// router.delete('/remove/:id', (req, res) => {
//   db.user.destroy({ where: { id: req.params.id } }).then((response) => {
//     res.json(200).send(response)
//   }).catch((err) => {
//     res.json(400).send(err)
//   })


// });



// module.exports = router;
