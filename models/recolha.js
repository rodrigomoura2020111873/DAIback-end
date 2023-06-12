const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create schema for camiao
const RecolhaSchema = new Schema({
  balde: {
    type: Schema.Types.ObjectId, ref: "balde",
    required: [true, "o campo 'Balde' é obrigatorio"],
  },
  camiao: {
    type: Schema.Types.ObjectId, ref: "camiao",
    required: [true, "o campo 'Camião' é obrigatorio"],
  },
  funcionario: {
    type: Schema.Types.ObjectId, ref: "funcionario",
    required: [true, "o campo 'Funcionário' é obrigatorio"],
  },
  data: {
    type: Date,
    required: [true, "o campo 'Data' é obrigatorio"],
  },
  peso: {
    type: String,
    required: [true, "o campo 'Peso' é obrigatorio"],
  }
});

// Create model for Balde
const Recolha = mongoose.model("recolha", RecolhaSchema);

exports.Recolha = Recolha;