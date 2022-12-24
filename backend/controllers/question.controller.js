const { question } = require("../models");

const getAllquestion = async (req , res , next) =>{

  try {
      const questions = await question.findAll();
      if(!question){
          throw new Error("No question found");
      }
   res.status(200).json({questions,});
  }catch (error){
      res.status(500).json({"error":error.message})
  }
};
const createquestion = async (req, res, next) => {
  let Question = req.body;

  try {
    {
      const newquestion = await question.create({
        questiondata: Question.questiondata,

        option1:Question.option1 ,
        option2: Question.option2,
        option3: Question.option3,
        bonne_reponse : Question.bonne_reponse,
      });
      return res
        .status(201)
        .json({ message: "succées de creation", newquestion });
    }
  } catch (error) {
    console.log(error.message);
  };

}



  const getquestionById = async (req , res , next) =>{

    try {const {questionId}=req.params;
        const questiondataa = await question.findOne({
          where: {id :questionId}

        });
        if(!questionId){
            throw new Error("No question found");
        }
     res.status(200).json({questiondataa});
    }catch (error){
        res.status(500).json({"error":error.message})
    }





}

module.exports = { getAllquestion, createquestion, getquestionById  };


