const { evenement } = require("../models");

const getAllEvenement = async (req, res, next) => {
  try {
    const evenements = await evenement.findAll();
    if (!evenement) {
      throw new Error("No event found");
    }
    res.status(200).json(evenements);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const createEvenement = async (req, res, next) => {
  let Evenement= req.body;

  try {
    {
      const newevenement = await evenement.create({
        // evenementdata: Evenement.evenementdata,

        nom_event: Evenement.nom_event,
        lieux_event: Evenement.lieux_event,
        stock_ticket: Evenement.stock_ticket,
        description: Evenement.description,
        prix: Evenement.prix,
        date: Evenement.date,
        type_event: Evenement.type_event,
        // categorieId: Evenement.categorieId,
      });
      return res
        .status(201)
        .json({ message: "succées de creation", newevenement });
    }
  } catch (error) {
    console.log(error.message);
  }
};
const getEvenementById = async (req, res, next) => {
  try {
    const {evenementId} = req.params;
    const evenementdata = await evenement.findOne({
      where: {id: evenementId}
    });
    if (!evenementdata) {
      throw new Error("No event found");
    }
    res.status(200).json({evenementdata});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
module.exports = { getAllEvenement, createEvenement, getEvenementById };
