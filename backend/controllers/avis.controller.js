const {avis} = require ('../models')

const getAllavis = async (req , res , next) =>{
    try {
        const aviss = await avis.findAll();
        if(!avis){
            throw new Error("No avis found");
        }
     res.status(200).json({aviss,});
    }catch (error){
        res.status(500).json({"error":error.message})
    }
}
const createavis = async (req , res, next) => {
    const {commentaire}=req.body
    try {
        const  newavis = await avis.create({commentaire})
        return  res.status(201).json({message: "succées de creation", newavis})


    }catch (error){
        res.status(500).json({"error":error.message})
    }

}

module.exports = {getAllavis,createavis}
