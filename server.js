const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const PORT = 25566;

let result = {};

app.use(express.static("public"));
app.use(express.json());

app.post("/save", (req, res) => {
  const data = { 1: 1 };
  let existingData = {};
  try {
    existingData = JSON.parse(fs.readFileSync(path.join(__dirname, "data", "data.json")));
  } catch (err) {
    console.error("Chyba při čtení souboru: ", err);
  }

  existingData.hello = data;
  fs.writeFileSync(path.join(__dirname, "data", "data.json"), JSON.stringify(existingData, null, 2));
  res.json({ status: "success", data });
});

app.post("/number-of-teams", (req, res) => {
  const numberOfTeams = req.body.number;
  let existingData = {};

  try {
    const dataPath = path.join(__dirname, "data", "data.json");
    if (fs.existsSync(dataPath)) {
      existingData = JSON.parse(fs.readFileSync(dataPath, "utf-8"));
    }
    existingData.numberOfTeams = { number: numberOfTeams };

    fs.writeFileSync(dataPath, JSON.stringify(existingData, null, 2));
    res.json({ status: "success", numberOfTeams });
  } catch (err) {
    console.error("Chyba při práci se souborem:", err);
    res.status(500).json({ status: "error", message: "Chyba při ukládání" });
  }
});

app.get("/read", (req, res) => {
  try {
    const fileData = fs.readFileSync(path.join(__dirname, "data", "data.json"), "utf8");
    result = JSON.parse(fileData);
    console.log("Obsah JSON souboru:", result);
    res.json({ status: "success", fileData: result });
  } catch (err) {
      console.error("Chyba při čtení souboru: ", err);
      res.status(500).json({ status: "error", message: "Chyba při čtení souboru" });
  }
});

app.get("/number-of-teams-read", (req, res) => {
  try {
    const fileData = fs.readFileSync(path.join(__dirname, "data", "data.json"), "utf8");
    result = JSON.parse(fileData).numberOfTeams.number;
    console.log("Obsah JSON souboru:", result);
    res.json({ status: "success", fileData: result });
  } catch (err) {
      console.error("Chyba při čtení souboru: ", err);
      res.status(500).json({ status: "error", message: "Chyba při čtení souboru" });
  }
});

app.get("/roztrel-read", (req, res) => {
  try {
    const fileData = fs.readFileSync(path.join(__dirname, "data", "data.json"), "utf8");
    const result = JSON.parse(fileData).roztrel;
    res.json({ status: "success", fileData: result });  // MUSÍ být .json()
  } catch (err) {
    console.error("Chyba při čtení souboru: ", err);
    res.status(500).json({ status: "error", message: "Chyba při čtení souboru" }); // taky .json()
  }
});

app.post("/roztrel-count", (req, res) => {
  const dataPath = path.join(__dirname, "data", "data.json");
  let existingData = {};

  try {
    if (fs.existsSync(dataPath)) {
      existingData = JSON.parse(fs.readFileSync(dataPath, "utf-8"));
    }
    if (!existingData.roztrel) {
      existingData.roztrel = {};
    }
    if (!existingData.roztrel.count) {
      existingData.roztrel.count = 1;
    } else {
      existingData.roztrel.count++;
    }
    fs.writeFileSync(dataPath, JSON.stringify(existingData, null, 2), "utf-8");

    res.json({ status: "success", count: existingData.roztrel.count });
  } catch (err) {
    console.error("Chyba při práci se souborem:", err);
    res.status(500).json({ status: "error", message: "Chyba při ukládání" });
  }
});

app.get("/count-questions-read1", (req, res) => {
  try {
    const fileData = fs.readFileSync(path.join(__dirname, "data", "data.json"), "utf8");
    const result = JSON.parse(fileData).roztrel.count;
    res.json({ status: "success", fileData: result });  // MUSÍ být .json()
  } catch (err) {
    console.error("Chyba při čtení souboru: ", err);
    res.status(500).json({ status: "error", message: "Chyba při čtení souboru" }); // taky .json()
  }
});

app.get("/count-questions-read2", (req, res) => {
  try {
    const fileData = fs.readFileSync(path.join(__dirname, "data", "data.json"), "utf8");
    const result = JSON.parse(fileData).roztrel.count;
    res.json({ status: "success", fileData: result });  // MUSÍ být .json()
  } catch (err) {
    console.error("Chyba při čtení souboru: ", err);
    res.status(500).json({ status: "error", message: "Chyba při čtení souboru" }); // taky .json()
  }
});

app.get("/count-questions-read3", (req, res) => {
  try {
    const fileData = fs.readFileSync(path.join(__dirname, "data", "data.json"), "utf8");
    const result = JSON.parse(fileData).roztrel.count;
    res.json({ status: "success", fileData: result });  // MUSÍ být .json()
  } catch (err) {
    console.error("Chyba při čtení souboru: ", err);
    res.status(500).json({ status: "error", message: "Chyba při čtení souboru" }); // taky .json()
  }
});

app.get("/count-questions-read4", (req, res) => {
  try {
    const fileData = fs.readFileSync(path.join(__dirname, "data", "data.json"), "utf8");
    const result = JSON.parse(fileData).roztrel.count;
    res.json({ status: "success", fileData: result });  // MUSÍ být .json()
  } catch (err) {
    console.error("Chyba při čtení souboru: ", err);
    res.status(500).json({ status: "error", message: "Chyba při čtení souboru" }); // taky .json()
  }
});

app.get("/count-questions-read5", (req, res) => {
  try {
    const fileData = fs.readFileSync(path.join(__dirname, "data", "data.json"), "utf8");
    const result = JSON.parse(fileData).roztrel.count;
    res.json({ status: "success", fileData: result });  // MUSÍ být .json()
  } catch (err) {
    console.error("Chyba při čtení souboru: ", err);
    res.status(500).json({ status: "error", message: "Chyba při čtení souboru" }); // taky .json()
  }
});

app.get("/count-questions-read6", (req, res) => {
  try {
    const fileData = fs.readFileSync(path.join(__dirname, "data", "data.json"), "utf8");
    const result = JSON.parse(fileData).roztrel.count;
    res.json({ status: "success", fileData: result });  // MUSÍ být .json()
  } catch (err) {
    console.error("Chyba při čtení souboru: ", err);
    res.status(500).json({ status: "error", message: "Chyba při čtení souboru" }); // taky .json()
  }
});

app.get("/count-questions-read7", (req, res) => {
  try {
    const fileData = fs.readFileSync(path.join(__dirname, "data", "data.json"), "utf8");
    const result = JSON.parse(fileData).roztrel.count;
    res.json({ status: "success", fileData: result });  // MUSÍ být .json()
  } catch (err) {
    console.error("Chyba při čtení souboru: ", err);
    res.status(500).json({ status: "error", message: "Chyba při čtení souboru" }); // taky .json()
  }
});

app.get("/count-questions-read8", (req, res) => {
  try {
    const fileData = fs.readFileSync(path.join(__dirname, "data", "data.json"), "utf8");
    const result = JSON.parse(fileData).roztrel.count;
    res.json({ status: "success", fileData: result });  // MUSÍ být .json()
  } catch (err) {
    console.error("Chyba při čtení souboru: ", err);
    res.status(500).json({ status: "error", message: "Chyba při čtení souboru" }); // taky .json()
  }
});

app.post('/save-time1', (req, res) => {
  const dataPath = path.join(__dirname, "data", "data.json");

  try {
    const time = req.body?.time;

    if (typeof time !== 'number' || time < 0) {
      return res.status(400).json({ error: 'Neplatný čas.' });
    }

    const jsonData = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));

    if (
      !jsonData.roztrel ||
      !jsonData.roztrel.rychlost ||
      !Object.prototype.hasOwnProperty.call(jsonData.roztrel.rychlost, 'team1')
    ) {
      return res.status(500).json({ error: 'Struktura JSON neodpovídá očekávání.' });
    }

    jsonData.roztrel.rychlost.team1 = time;

    fs.writeFileSync(dataPath, JSON.stringify(jsonData, null, 2), 'utf-8');

    console.log("Uložený čas do team1:", time);

    res.json({ status: 'čas uložen do team1', ulozeno: time });

  } catch (error) {
    console.error("CHYBA SERVERU:", error);
    res.status(500).json({ error: 'Chyba při ukládání času.' });
  }
});


app.post('/save-time2', (req, res) => {
  const dataPath = path.join(__dirname, "data", "data.json");

  try {
    const time = req.body?.time;

    if (typeof time !== 'number' || time < 0) {
      return res.status(400).json({ error: 'Neplatný čas.' });
    }

    const jsonData = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));

    if (
      !jsonData.roztrel ||
      !jsonData.roztrel.rychlost ||
      !Object.prototype.hasOwnProperty.call(jsonData.roztrel.rychlost, 'team2')
    ) {
      return res.status(500).json({ error: 'Struktura JSON neodpovídá očekávání.' });
    }

    jsonData.roztrel.rychlost.team2 = time;

    fs.writeFileSync(dataPath, JSON.stringify(jsonData, null, 2), 'utf-8');

    console.log("Uložený čas do team1:", time);

    res.json({ status: 'čas uložen do team1', ulozeno: time });

  } catch (error) {
    console.error("CHYBA SERVERU:", error);
    res.status(500).json({ error: 'Chyba při ukládání času.' });
  }
});

app.post('/save-time3', (req, res) => {
  const dataPath = path.join(__dirname, "data", "data.json");

  try {
    const time = req.body?.time;

    if (typeof time !== 'number' || time < 0) {
      return res.status(400).json({ error: 'Neplatný čas.' });
    }

    const jsonData = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));

    if (
      !jsonData.roztrel ||
      !jsonData.roztrel.rychlost ||
      !Object.prototype.hasOwnProperty.call(jsonData.roztrel.rychlost, 'team3')
    ) {
      return res.status(500).json({ error: 'Struktura JSON neodpovídá očekávání.' });
    }

    jsonData.roztrel.rychlost.team3 = time;

    fs.writeFileSync(dataPath, JSON.stringify(jsonData, null, 2), 'utf-8');

    console.log("Uložený čas do team1:", time);

    res.json({ status: 'čas uložen do team1', ulozeno: time });

  } catch (error) {
    console.error("CHYBA SERVERU:", error);
    res.status(500).json({ error: 'Chyba při ukládání času.' });
  }
});

app.post('/save-time4', (req, res) => {
  const dataPath = path.join(__dirname, "data", "data.json");

  try {
    const time = req.body?.time;

    if (typeof time !== 'number' || time < 0) {
      return res.status(400).json({ error: 'Neplatný čas.' });
    }

    const jsonData = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));

    if (
      !jsonData.roztrel ||
      !jsonData.roztrel.rychlost ||
      !Object.prototype.hasOwnProperty.call(jsonData.roztrel.rychlost, 'team4')
    ) {
      return res.status(500).json({ error: 'Struktura JSON neodpovídá očekávání.' });
    }

    jsonData.roztrel.rychlost.team4 = time;

    fs.writeFileSync(dataPath, JSON.stringify(jsonData, null, 2), 'utf-8');

    console.log("Uložený čas do team1:", time);

    res.json({ status: 'čas uložen do team1', ulozeno: time });

  } catch (error) {
    console.error("CHYBA SERVERU:", error);
    res.status(500).json({ error: 'Chyba při ukládání času.' });
  }
});

app.post('/save-time5', (req, res) => {
  const dataPath = path.join(__dirname, "data", "data.json");

  try {
    const time = req.body?.time;

    if (typeof time !== 'number' || time < 0) {
      return res.status(400).json({ error: 'Neplatný čas.' });
    }

    const jsonData = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));

    if (
      !jsonData.roztrel ||
      !jsonData.roztrel.rychlost ||
      !Object.prototype.hasOwnProperty.call(jsonData.roztrel.rychlost, 'team5')
    ) {
      return res.status(500).json({ error: 'Struktura JSON neodpovídá očekávání.' });
    }

    jsonData.roztrel.rychlost.team5 = time;

    fs.writeFileSync(dataPath, JSON.stringify(jsonData, null, 2), 'utf-8');

    console.log("Uložený čas do team1:", time);

    res.json({ status: 'čas uložen do team1', ulozeno: time });

  } catch (error) {
    console.error("CHYBA SERVERU:", error);
    res.status(500).json({ error: 'Chyba při ukládání času.' });
  }
});

app.post('/save-time6', (req, res) => {
  const dataPath = path.join(__dirname, "data", "data.json");

  try {
    const time = req.body?.time;

    if (typeof time !== 'number' || time < 0) {
      return res.status(400).json({ error: 'Neplatný čas.' });
    }

    const jsonData = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));

    if (
      !jsonData.roztrel ||
      !jsonData.roztrel.rychlost ||
      !Object.prototype.hasOwnProperty.call(jsonData.roztrel.rychlost, 'team6')
    ) {
      return res.status(500).json({ error: 'Struktura JSON neodpovídá očekávání.' });
    }

    jsonData.roztrel.rychlost.team6 = time;

    fs.writeFileSync(dataPath, JSON.stringify(jsonData, null, 2), 'utf-8');

    console.log("Uložený čas do team1:", time);

    res.json({ status: 'čas uložen do team1', ulozeno: time });

  } catch (error) {
    console.error("CHYBA SERVERU:", error);
    res.status(500).json({ error: 'Chyba při ukládání času.' });
  }
});

app.post('/save-time7', (req, res) => {
  const dataPath = path.join(__dirname, "data", "data.json");

  try {
    const time = req.body?.time;

    if (typeof time !== 'number' || time < 0) {
      return res.status(400).json({ error: 'Neplatný čas.' });
    }

    const jsonData = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));

    if (
      !jsonData.roztrel ||
      !jsonData.roztrel.rychlost ||
      !Object.prototype.hasOwnProperty.call(jsonData.roztrel.rychlost, 'team7')
    ) {
      return res.status(500).json({ error: 'Struktura JSON neodpovídá očekávání.' });
    }

    jsonData.roztrel.rychlost.team7 = time;

    fs.writeFileSync(dataPath, JSON.stringify(jsonData, null, 2), 'utf-8');

    console.log("Uložený čas do team1:", time);

    res.json({ status: 'čas uložen do team1', ulozeno: time });

  } catch (error) {
    console.error("CHYBA SERVERU:", error);
    res.status(500).json({ error: 'Chyba při ukládání času.' });
  }
});

app.post('/save-time8', (req, res) => {
  const dataPath = path.join(__dirname, "data", "data.json");

  try {
    const time = req.body?.time;

    if (typeof time !== 'number' || time < 0) {
      return res.status(400).json({ error: 'Neplatný čas.' });
    }

    const jsonData = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));

    if (
      !jsonData.roztrel ||
      !jsonData.roztrel.rychlost ||
      !Object.prototype.hasOwnProperty.call(jsonData.roztrel.rychlost, 'team8')
    ) {
      return res.status(500).json({ error: 'Struktura JSON neodpovídá očekávání.' });
    }

    jsonData.roztrel.rychlost.team8 = time;

    fs.writeFileSync(dataPath, JSON.stringify(jsonData, null, 2), 'utf-8');

    console.log("Uložený čas do team1:", time);

    res.json({ status: 'čas uložen do team1', ulozeno: time });

  } catch (error) {
    console.error("CHYBA SERVERU:", error);
    res.status(500).json({ error: 'Chyba při ukládání času.' });
  }
});

app.get("/teamTimeDisplayLoop1", (req, res) => {
  try {
    const fileData = fs.readFileSync(path.join(__dirname, "data", "data.json"), "utf8");
    const result = JSON.parse(fileData).roztrel.rychlost.team1;
    res.json({ status: "success", fileData: result });  // MUSÍ být .json()
  } catch (err) {
    console.error("Chyba při čtení souboru: ", err);
    res.status(500).json({ status: "error", message: "Chyba při čtení souboru" }); // taky .json()
  }
});

app.get("/teamTimeDisplayLoop2", (req, res) => {
  try {
    const fileData = fs.readFileSync(path.join(__dirname, "data", "data.json"), "utf8");
    const result = JSON.parse(fileData).roztrel.rychlost.team2;
    res.json({ status: "success", fileData: result });  // MUSÍ být .json()
  } catch (err) {
    console.error("Chyba při čtení souboru: ", err);
    res.status(500).json({ status: "error", message: "Chyba při čtení souboru" }); // taky .json()
  }
});

app.get("/teamTimeDisplayLoop3", (req, res) => {
  try {
    const fileData = fs.readFileSync(path.join(__dirname, "data", "data.json"), "utf8");
    const result = JSON.parse(fileData).roztrel.rychlost.team3;
    res.json({ status: "success", fileData: result });  // MUSÍ být .json()
  } catch (err) {
    console.error("Chyba při čtení souboru: ", err);
    res.status(500).json({ status: "error", message: "Chyba při čtení souboru" }); // taky .json()
  }
});

app.get("/teamTimeDisplayLoop4", (req, res) => {
  try {
    const fileData = fs.readFileSync(path.join(__dirname, "data", "data.json"), "utf8");
    const result = JSON.parse(fileData).roztrel.rychlost.team4;
    res.json({ status: "success", fileData: result });  // MUSÍ být .json()
  } catch (err) {
    console.error("Chyba při čtení souboru: ", err);
    res.status(500).json({ status: "error", message: "Chyba při čtení souboru" }); // taky .json()
  }
});

app.get("/teamTimeDisplayLoop5", (req, res) => {
  try {
    const fileData = fs.readFileSync(path.join(__dirname, "data", "data.json"), "utf8");
    const result = JSON.parse(fileData).roztrel.rychlost.team5;
    res.json({ status: "success", fileData: result });  // MUSÍ být .json()
  } catch (err) {
    console.error("Chyba při čtení souboru: ", err);
    res.status(500).json({ status: "error", message: "Chyba při čtení souboru" }); // taky .json()
  }
});

app.get("/teamTimeDisplayLoop6", (req, res) => {
  try {
    const fileData = fs.readFileSync(path.join(__dirname, "data", "data.json"), "utf8");
    const result = JSON.parse(fileData).roztrel.rychlost.team6;
    res.json({ status: "success", fileData: result });  // MUSÍ být .json()
  } catch (err) {
    console.error("Chyba při čtení souboru: ", err);
    res.status(500).json({ status: "error", message: "Chyba při čtení souboru" }); // taky .json()
  }
});

app.get("/teamTimeDisplayLoop7", (req, res) => {
  try {
    const fileData = fs.readFileSync(path.join(__dirname, "data", "data.json"), "utf8");
    const result = JSON.parse(fileData).roztrel.rychlost.team7;
    res.json({ status: "success", fileData: result });  // MUSÍ být .json()
  } catch (err) {
    console.error("Chyba při čtení souboru: ", err);
    res.status(500).json({ status: "error", message: "Chyba při čtení souboru" }); // taky .json()
  }
});

app.get("/teamTimeDisplayLoop8", (req, res) => {
  try {
    const fileData = fs.readFileSync(path.join(__dirname, "data", "data.json"), "utf8");
    const result = JSON.parse(fileData).roztrel.rychlost.team8;
    res.json({ status: "success", fileData: result });  // MUSÍ být .json()
  } catch (err) {
    console.error("Chyba při čtení souboru: ", err);
    res.status(500).json({ status: "error", message: "Chyba při čtení souboru" }); // taky .json()
  }
});

app.get('/quiz-data', (req, res) => {
  const quizFilePath = path.join(__dirname, 'data', 'data.json');

  fs.readFile(quizFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Chyba při čtení souboru:', err);
      return res.status(500).json({ error: 'Chyba při čtení dat' });
    }

    try {
      const quizData = JSON.parse(data);
      res.json(quizData);
    } catch (parseError) {
      console.error('Chyba při parsování JSON:', parseError);
      res.status(500).json({ error: 'Chybný formát dat' });
    }
  });
});

app.listen(PORT, () => console.log(`Server běží na portu ${PORT}`));
