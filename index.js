const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const baldeRoutes = require("./routes/balde");
const camiaoRoutes = require("./routes/camiao");
const funcionarioRoutes = require("./routes/funcionario");
const itenerarioRoutes = require("./routes/itenerario");
const manutencaoRoutes = require("./routes/manutencao");
const recolhaRoutes = require("./routes/recolha");
const { schema } = require("./schemas/basic-schema");
const { createHandler } = require("graphql-http/lib/use/express");

require("dotenv").config();

const port = 8080;

mongoose
  .connect(process.env.DB, { useNewUrlParser: true })
  .then(() => console.log(`Database connected successfully`))
  .catch((err) => console.log(err));

const app = express();

app.use(bodyParser.json());

app.use("/api/balde", baldeRoutes);
app.use("/api/camiao", camiaoRoutes);
app.use("/api/funcionario", funcionarioRoutes);
app.use("/api/itenerario", itenerarioRoutes);
app.use("/api/manutencao", manutencaoRoutes);
app.use("/api/recolha", recolhaRoutes);
app.all("/graphql", createHandler({ schema }));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
