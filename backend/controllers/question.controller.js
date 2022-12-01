const { question } = require("../models");

const createQuestion = async (req, res, next) => {
  const { question, option1, option2,option3,bonne_reponse, quizId } = req.body;
  try {
    const createdQuestion = await question.create({
      question,
      option1,
      option2,
      option3,
      bonne_reponse,
      quizId
    });
    res.status(201).json({
      createdQuestion,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });

  }
};
const getQuestion=async (req,res)=>{
  try{
    const{questionId}= req.params;
    const questionData = await question.findOne({
      where:{id:questionId},
    });
    if(!questionData){
      throw new Error("Question not found");
    }
    res.status(200).json({
      questionData,
    });
  }catch(error){
    res.status(500).json({
      error:error.message,
    });
    console.log(error);
  }
};
const updateQuestion = async(req,res)=>{
  try{
    const{questionId}=req.params;
    const[updated]=await question.update(req.body,{
      where:{id:questionId},
    });
    if(update){
      const updateQuestion = await question.findOne({where:{id:questionId}});
      res.status(200).json({
        question : updateQuestion,
      });
    }
    throw new Error("Question not found");
  }catch(error){
    res.status(500).json({
      error:error.message,
    });
  }
};
const deleteQuestion= async(req,res)=>{
  try{
    const{questionId}= req.params;
    const deleted = await question.destroy({
     where:{id:questionId},
    });
    if(!deleted){
      throw new Error("Question not found");
    }
    res.status(200).json({});
  }catch(error){
    res.status(500).json({
      error:error.message,


    });
    console.log(error);
  }
};
const getAllQuestion = async(req,res)=>{
  try{
    const questions = await question.findAll();
    if(!question){
      throw new Error("Question not found");
    }
    res.status(200).json({
      questions
    });
  }catch(error){
    res.status(500).json({
      error:error.message,
    });
    console.log(error);
  }
};

module.exports = {
  createQuestion,
  getQuestion,
  updateQuestion,
  deleteQuestion,
  getAllQuestion,
};
