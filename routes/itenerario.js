const express = require("express");
const {Itenerario} = require("../models/itenerario");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const itenerario = await Itenerario.find();
    res.status(200).json({
      status: "success",
      results: itenerario.length,
      data: {
        itenerario,
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
    const itenerario = await Itenerario.findById(req.params.id);
    if (!itenerario) {
      return res.status(404).json({
        status: "fail",
        message: "Itenerario não encontrado",
      });
    }

    res.status(200).json({
      status: "success",
      data: {
        itenerario,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Erro ao encontrar o itenerário",
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const novoItenerario = await Itenerario.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        Itenerario: novoItenerario,
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
    await Itenerario.updateOne({ _id: req.params.id }, req.body);
    res.send(await Itenerario.findById(req.params.id));
  } catch (err) {
    console.log(err);
    res.statusCode = 400;
    res.send(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Itenerario.findByIdAndDelete(req.params.id);
  } catch (err) {
    console.log(err);
    res.statusCode = 400;
  }
  res.send();
});

module.exports = router;