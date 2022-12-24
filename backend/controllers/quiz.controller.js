const {quiz} = require ('../models')

const getAllquiz = async (req , res , next) =>{

    try {
        const quizs = await quiz.findAll();
        if(!quiz){
            throw new Error("No quiz found");
        }
     res.status(200).json({quizs,});
    }catch (error){
        res.status(500).json({"error":error.message})
    }
}
const createquiz = async (req, res, next) => {
    let {nom} = req.body;

    try {
      {
        const newquiz = await quiz.create({
          nom: nom,

        });
        return res
          .status(201)
          .json({ message: "succées de creation", newquiz });
      }
    } catch (error) {
      console.log(error.message);
    };

  }


    const getquizById = async (req , res , next) =>{

      try {const {quizId}=req.params;
          const quizdata = await quiz.findOne({
            where: {id :quizId}

          });
          if(!quizdata){
              throw new Error("No quiz found");
          }
       res.status(200).json({quizdata});
      }catch (error){
          res.status(500).json({"error":error.message})
      }
  }



module.exports = {getAllquiz,createquiz,getquizById}
