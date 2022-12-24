const { serviice } = require("../models");

const getAllserviice = async (req, res, next) => {
  try {
    const serviices = await serviice.findAll();
    if (!serviice) {
      throw new Error("No serviice found");
    }
    res.status(200).json({ serviices });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const createserviice = async (req, res, next) => {
  let Service = req.body;

  try {
    {
      const newserviice = await serviice.create({
        nom:Service.nom,
        type:Service.type ,
        description:Service.desc,
        contact:Service.contact,
      });
      return res
        .status(201)
        .json({ message: "succées de creation", newserviice });
    }
  } catch (error) {
    console.log(error.message);
  };
}
  const getserviiceById = async (req , res , next) =>{

    try {const {serviiceId}=req.params;
        const serviicedata = await serviice.findOne({
          where: {id :serviiceId}

        });

        if(!serviicedata){
            throw new Error("No serviice found");
        }
     res.status(200).json({serviicedata});
    }catch (error){
        res.status(500).json({"error":error.message})
    }


}

module.exports = { getAllserviice, createserviice ,getserviiceById };
