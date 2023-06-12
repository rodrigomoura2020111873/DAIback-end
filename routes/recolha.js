const express = require("express");
const {Recolha} = require("../models/recolha");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const recolha = await Recolha.find();
    res.status(200).json({
      status: "success",
      results: recolha.length,
      data: {
        recolha,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const recolha = await Recolha.findById(req.params.id);
    if (!recolha) {
      return res.status(404).json({
        status: "fail",
        message: "Recolha não encontrado",
      });
    }

    res.status(200).json({
      status: "success",
      data: {
        recolha,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Erro ao encontrar a Recolha",
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const novoRecolha = await Recolha.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        Recolha: novoRecolha,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
});


router.put("/:id", async (req, res) => {
  try {
    await Recolha.updateOne({ _id: req.params.id }, req.body);
    res.send(await Recolha.findById(req.params.id));
  } catch (err) {
    console.log(err);
    res.statusCode = 400;
    res.send(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Recolha.findByIdAndDelete(req.params.id);
  } catch (err) {
    console.log(err);
    res.statusCode = 400;
  }
  res.send();
});

module.exports = router;