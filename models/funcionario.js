const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create schema for camiao
const FuncionarioSchema = new Schema({
  nome: {
    type: String,
    required: [true, "o campo 'Nome' é obrigatorio"],
  },
  funcao: {
    type: String,
    required: [true, "o campo 'Funcao' é obrigatorio"],
  },
  morada: {
    type: String,
    required: [true, "o campo 'Morada' é obrigatorio"],
  },
  email: {
    type: String,
    required: [true, "o campo 'Email' é obrigatorio"],
  }
});

// Create model for Balde
const Funcionario = mongoose.model("funcionario", FuncionarioSchema);

exports.Funcionario = Funcionario;