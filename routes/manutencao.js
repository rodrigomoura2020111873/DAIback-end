const express = require("express");
const {Manutencao} = require("../models/manutencao");
const { Recolha } = require("../models/recolha");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const manutencao = await Manutencao.find();
    res.status(200).json({
      status: "success",
      results: manutencao.length,
      data: {
        manutencao,
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
    const manutencao = await Manutencao.findById(req.params.id);
    if (!manutencao) {
      return res.status(404).json({
        status: "fail",
        message: "Manutencao não encontrado",
      });
    }

    res.status(200).json({
      status: "success",
      data: {
        manutencao,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Erro ao encontrar a Manutenção",
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const novoManutencao = await Manutencao.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        Manutencao: novoManutencao,
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
    await Manutencao.updateOne({ _id: req.params.id }, req.body);
    res.send(await Manutencao.findById(req.params.id));
  } catch (err) {
    console.log(err);
    res.statusCode = 400;
    res.send(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Manutencao.findByIdAndDelete(req.params.id);
  } catch (err) {
    console.log(err);
    res.statusCode = 400;
  }
  res.send();
});

module.exports = router;