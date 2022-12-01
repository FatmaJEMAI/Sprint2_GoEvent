const { quiz } = require("../models");

const createQuiz = async (req, res, next) => {
  const { nom,  } = req.body;
  try {
    const createdQuiz = await quiz.create({
      nom,

    });
    res.status(201).json({
      createdQuiz,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });

  }
};
const getQuiz=async (req,res)=>{
  try{
    const{quizId}= req.params;
    const quizData = await quiz.findOne({
      where:{id:quizId},
    });
    if(!quizData){
      throw new Error("quiz not found");
    }
    res.status(200).json({
      quizData,
    });
  }catch(error){
    res.status(500).json({
      error:error.message,
    });
    console.log(error);
  }
};
const updateQuiz = async(req,res)=>{
  try{
    const{quizId}=req.params;
    const[updated]=await quiz.update(req.body,{
      where:{id:quizId},
    });
    if(update){
      const updateQuiz = await quiz.findOne({where:{id:quizId}});
      res.status(200).json({
        quiz : updateQuiz,
      });
    }
    throw new Error("Quiz not found");
  }catch(error){
    res.status(500).json({
      error:error.message,
    });
  }
};
const deleteQuiz= async(req,res)=>{
  try{
    const{quizId}= req.params;
    const deleted = await quiz.destroy({
     where:{id:quizId},
    });
    if(!deleted){
      throw new Error("Quiz not found");
    }
    res.status(200).json({});
  }catch(error){
    res.status(500).json({
      error:error.message,


    });
    console.log(error);
  }
};
const getAllQuiz = async(req,res)=>{
  try{
    const quizs = await quiz.findAll();
    if(!quiz){
      throw new Error("Quiz not found");
    }
    res.status(200).json({
      quizs
    });
  }catch(error){
    res.status(500).json({
      error:error.message,
    });
    console.log(error);
  }
};

module.exports = {
  createQuiz,
  getQuiz,
  updateQuiz,
  deleteQuiz,
  getAllQuiz,
};
