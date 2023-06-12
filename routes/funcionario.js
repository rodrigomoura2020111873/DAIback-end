const express = require("express");
const {Funcionario} = require("../models/funcionario");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const funcionario = await Funcionario.find();
    res.status(200).json({
      status: "success",
      results: funcionario.length,
      data: {
        funcionario,
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
    const funcionario = await Funcionario.findById(req.params.id);
    if (!funcionario) {
      return res.status(404).json({
        status: "fail",
        message: "funcionario não encontrado",
      });
    }

    res.status(200).json({
      status: "success",
      data: {
        funcionario,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Erro ao encontrar o funcionario",
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const novoFuncionario = await Funcionario.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        funcionario: novoFuncionario,
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
    await Funcionario.updateOne({ _id: req.params.id }, req.body);
    res.send(await Funcionario.findById(req.params.id));
  } catch (err) {
    console.log(err);
    res.statusCode = 400;
    res.send(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Funcionario.findByIdAndDelete(req.params.id);
  } catch (err) {
    console.log(err);
    res.statusCode = 400;
  }
  res.send();
});

module.exports = router;