const express = require("express");
const {Camiao} = require("../models/camiao");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const camiao = await Camiao.find();
    res.status(200).json({
      status: "success",
      results: camiao.length,
      data: {
        camiao,
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
    const camiao = await Camiao.findById(req.params.id);
    if (!camiao) {
      return res.status(404).json({
        status: "fail",
        message: "Camião não encontrado",
      });
    }

    res.status(200).json({
      status: "success",
      data: {
        camiao,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Erro ao encontrar o camião",
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const novoCamiao = await Camiao.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        camiao: novoCamiao,
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
    await Camiao.updateOne({ _id: req.params.id }, req.body);
    res.send(await Camiao.findById(req.params.id));
  } catch (err) {
    console.log(err);
    res.statusCode = 400;
    res.send(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Camiao.findByIdAndDelete(req.params.id);
  } catch (err) {
    console.log(err);
    res.statusCode = 400;
  }
  res.send();
});

module.exports = router;