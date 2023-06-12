const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create schema for camiao
const CamiaoSchema = new Schema({
  matricula: {
    type: String,
    required: [true, "o campo 'Matricula' é obrigatorio"],
  },
  marca: {
    type: String,
    required: [true, "o campo 'Marca' é obrigatorio"],
  },
  modelo: {
    type: String,
    required: [true, "o campo 'Modelo' é obrigatorio"],
  },
  cor: {
    type: String,
    required: [true, "o campo 'Cor' é obrigatorio"],
  }
});

// Create model for Balde
const Camiao = mongoose.model("camiao", CamiaoSchema);

exports.Camiao = Camiao;