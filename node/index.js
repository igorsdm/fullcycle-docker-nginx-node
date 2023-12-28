import express from "express";
import mysql from "mysql";
import { faker } from "@faker-js/faker";

const port = 3000;

const config = {
  host: "db",
  user: "root",
  password: "root",
  database: "nodedb",
};

const app = express();

app.get("/", (_, res) => {
  const connection = mysql.createConnection(config);

  const name = faker.person.firstName();

  new Promise((resolve) => {
    connection.query(`INSERT INTO people(name) values('${name}')`, () => {
      resolve();
    });
  });

  connection.query(`SELECT name FROM people`, (error, results, fields) => {
    res.send(`
    <h1>Full Cycle Rocks!</h1>
    ${
      !!results
        ? `<ol>
        ${results.map((result) => `<li>${result.name}</li>`).join("")}
        </ol>`
        : "</>"
    }
    `);
  });
});

app.listen(port, () => {
  console.log(`Rondando na porta ${port}`);
});
