const express = require("express");
const {Balde} = require("../models/balde");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const baldes = await Balde.find();
    res.status(200).json({
      status: "success",
      results: baldes.length,
      data: {
        baldes,
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
    const balde = await Balde.findById(req.params.id);
    if (!balde) {
      return res.status(404).json({
        status: "fail",
        message: "Balde não encontrado",
      });
    }

    res.status(200).json({
      status: "success",
      data: {
        balde,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Erro ao encontrar o balde",
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const novoBalde = await Balde.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        balde: novoBalde,
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
    await Balde.updateOne({ _id: req.params.id }, req.body);
    res.send(await Balde.findById(req.params.id));
  } catch (err) {
    console.log(err);
    res.statusCode = 400;
    res.send(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Balde.findByIdAndDelete(req.params.id);
  } catch (err) {
    console.log(err);
    res.statusCode = 400;
  }
  res.send();
});

module.exports = router;
