const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create schema for camiao
const ManutencaoSchema = new Schema({
  balde: {
    type: Schema.Types.ObjectId, ref: "balde",
    required: [true, "o campo 'Balde' é obrigatorio"],
  },
  funcionario: {
    type: Schema.Types.ObjectId, ref: "funcionario",
    required: [true, "o campo 'Funcionário' é obrigatorio"],
  },
  data: {
    type: Date,
    required: [true, "o campo 'Data' é obrigatorio"],
  },
  descricao: {
    type: String,
  }
});

// Create model for Balde
const Manutencao = mongoose.model("manutencao", ManutencaoSchema);

exports.Manutencao = Manutencao;