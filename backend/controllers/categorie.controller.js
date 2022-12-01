const { categorie } = require("../models");

const createCategorie = async (req, res, next) => {
  const { nom,  } = req.body;
  try {
    const createdCategorie = await categorie.create({
      nom,

    });
    res.status(201).json({
      createdCategorie,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });

  }
};
const getCategorie=async (req,res)=>{
  try{
    const{categorieId}= req.params;
    const categorieData = await categorie.findOne({
      where:{id:categorieId},
    });
    if(!categorieData){
      throw new Error("Categorie not found");
    }
    res.status(200).json({
      categorieData,
    });
  }catch(error){
    res.status(500).json({
      error:error.message,
    });
    console.log(error);
  }
};
const updateCategorie = async(req,res)=>{
  try{
    const{categorieId}=req.params;
    const[updated]=await categorie.update(req.body,{
      where:{id:categorieId},
    });
    if(update){
      const updateCategorie = await categorie.findOne({where:{id:categorieId}});
      res.status(200).json({
        categorie : updateCategorie,
      });
    }
    throw new Error("Categorie not found");
  }catch(error){
    res.status(500).json({
      error:error.message,
    });
  }
};
const deleteCategorie= async(req,res)=>{
  try{
    const{categorieId}= req.params;
    const deleted = await categorie.destroy({
     where:{id:categorieId},
    });
    if(!deleted){
      throw new Error("Categorie not found");
    }
    res.status(200).json({});
  }catch(error){
    res.status(500).json({
      error:error.message,


    });
    console.log(error);
  }
};
const getAllCategorie = async(req,res)=>{
  try{
    const categories = await categorie.findAll();
    if(!categorie){
      throw new Error("Categorie not found");
    }
    res.status(200).json({
      categories
    });
  }catch(error){
    res.status(500).json({
      error:error.message,
    });
    console.log(error);
  }
};

module.exports = {
  createCategorie,
  getCategorie,
  updateCategorie,
  deleteCategorie,
  getAllCategorie,
};
