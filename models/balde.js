const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create schema for balde
const BaldeSchema = new Schema({
  conselho: {
    type: String,
    required: [true, "o campo 'Conselho' é obrigatorio"],
  },
  freguesia: {
    type: String,
    required: [true, "o campo 'Freguesia' é obrigatorio"],
  },
  rua: {
    type: String,
    required: [true, "o campo 'Rua' é obrigatorio"],
  },
  localizacao: {
    type: Array,
    required: [true, "o campo 'Localizacao' é obrigatorio"],
  },
  percentagem_lixo: {
    type: Number, min: 0, max:100,
    required: [true, "o campo 'Percentagem de lixo' é obrigatorio"],
  },
  tipo: {
    type: String,
    required: [true, "o campo 'Tipo' é obrigatorio"],
  },
});

// Create model for Balde
const Balde = mongoose.model("balde", BaldeSchema);

exports.Balde = Balde;