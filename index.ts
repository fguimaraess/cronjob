import mongoose from "mongoose";
import express from "express";
import Job from "./jobs/job";

const app = express();

const job = new Job();
mongoose
    .connect(
    "mongodb+srv://Redeinvestimento:RedeInvestimentos1!@cluster0-w6g1v.gcp.mongodb.net/TesteNode?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      serverSelectionTimeoutMS: 5000,
    }
  )
  .then(async (connection) => {
    app.listen("3000", () => {
      console.log(
        "Servidor rodando em http://localhost:%d in %s mode",
        '3000',
        'dev'
      );
      console.log("Pressione CTRL-C para parar\n");
      job.shopRefresh();
    });

    app.on("close", () => {
      app.removeAllListeners();
    });
  })
  .catch((error) => console.log(error));
