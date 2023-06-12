const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create schema for camiao
const ItenerarioSchema = new Schema({
  camiao: {
    type: Schema.Types.ObjectId, ref: "camiao",
    required: [true, "o campo 'Camião' é obrigatorio"],
  },
  condutor: {
    type: Schema.Types.ObjectId, ref: "funcionario",
    required: [true, "o campo 'Condutor' é obrigatorio"],
  },
  data: {
    type: Date,
    required: [true, "o campo 'Data' é obrigatorio"],
  },
  percurso: {
    type: Array,
  }
});

// Create model for Balde
const Itenerario = mongoose.model("itenerario", ItenerarioSchema);

exports.Itenerario = Itenerario;