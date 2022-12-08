const {question} = require ('../models')

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
}
const createquestion = async (req , res, next) => {
    const {questiondata,option1,option2,option3,bonne_reponse,quizId}=req.body
    try {
        const  newquestion = await question.create({questiondata,option1,option2,option3,bonne_reponse,quizId})
        return  res.status(201).json({message: "succées de creation", newquestion})


    }catch (error){
        res.status(500).json({"error":error.message})
    }}

module.exports = {getAllquestion,createquestion};
