const {quizres , user,quiz} = require ('../models')

const getAllquizres = async (req , res , next) =>{

    try {
        const quizress = await quizres.findAll({include:[{
           model: user,
           attributes:["nom"],

        },{

            model: quiz,
            attributes:["nom"],

         },

        ]



   });
        if(!quizres){
            throw new Error("No quizres found");
        }
     res.status(200).json({quizress,});
    }catch (error){
        res.status(500).json({"error":error.message})
    }
}
const createquizres = async (req, res, next) => {
    let {score} = req.body;

    try {
      {
        const newquizres = await quizres.create({
          score: score,


        });
        return res
          .status(201)
          .json({ message: "succées de creation", newquizres });
      }
    } catch (error) {
      console.log(error.message);
    };


}

module.exports = {getAllquizres,createquizres}
