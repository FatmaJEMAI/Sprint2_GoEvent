const { categorie } = require("../models");

const createCategorie = async (req, res, next) => {
  let Categorie= req.body;
  try {
    const newcategorie = await categorie.create({
      nom: Categorie.nom,

    });
    res.status(201).json({
      message: "succes de creation", newcategorie
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });

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
const getcategorieById = async (req , res , next) =>{

  try {const {categorieId}=req.params;
      const categoriedata = await categorie.findOne({
        where: {id :categorieId}

      });

      if(!categoriedata){
          throw new Error("No categorie found");
      }
   res.status(200).json({categoriedata});
  }catch (error){
      res.status(500).json({"error":error.message})
  }


}


module.exports = {
  createCategorie,
  getAllCategorie,
  getcategorieById
};
