const { evenement} = require("../models");

const createEvenement = async (req, res, next) => {
  const { nom_event, lieux_event, description, prix, stock_ticket,date,type_event ,categorieId} = req.body;
  try {
    const createdEvenement = await evenement.create({
      nom_event,
      lieux_event,
      stock_ticket,
      description,
      prix,
      date,
      type_event,
      categorieId
    });
    res.status(201).json({
      createdEvenement,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });

  }
};
const getEvenement=async (req,res)=>{
  try{
    const{eventId}= req.params;
    const evenementData = await evenement.findOne({
      where:{id:eventId},
    });
    if(!evenementData){
      throw new Error("evenement not found");
    }
    res.status(200).json({
      evenementData,
    });
  }catch(error){
    res.status(500).json({
      error:error.message,
    });
    console.log(error);
  }
};
const updateEvenement = async(req,res)=>{
  try{
    const{eventId}=req.params;
    const[updated]=await evenement.update(req.body,{
      where:{id:eventId},
    });
    if(update){
      const updateEvenement = await evenement.findOne({where:{id:eventId}});
      res.status(200).json({
        evenement : updateEvenement,
      });
    }
    throw new Error("categorie not found");
  }catch(error){
    res.status(500).json({
      error:error.message,
    });
  }
};
const deleteEvenement= async(req,res)=>{
  try{
    const{eventId}= req.params;
    const deleted = await evenement.destroy({
     where:{id:eventId},
    });
    if(!deleted){
      throw new Error("Evenement not found");
    }
    res.status(200).json({});
  }catch(error){
    res.status(500).json({
      error:error.message,


    });
    console.log(error);
  }
};
const getAllEvenement = async(req,res)=>{
  try{
    const evenements = await evenement.findAll();
    if(!evenement){
      throw new Error("Evenement not found");
    }
    res.status(200).json({
      evenements
    });
  }catch(error){
    res.status(500).json({
      error:error.message,
    });
    console.log(error);
  }
};
// const findUsersByClass = async (req, res) => {
//   try {
//     const { classroomId } = req.params;
//     const classroomData = await classroom.findOne({
//       where: { id: classroomId },
//       include: "users",
//     });
//     if (!classroomData) {
//       throw new Error("Classroom not found");
//     }
//     res.status(200).json({
//       classroomData,
//     });
//   } catch (error) {
//     res.status(500).json({
//       error: error.message,
//     });
//   }
// };
module.exports = {
  createEvenement,
  getEvenement,
  updateEvenement,
  deleteEvenement,
  getAllEvenement,
};
