const express = require("express");
const cors = require("cors");
const pool = require("./database/db")

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome to the SplitEase API!");
}
);

app.get('/users', async (req, res) => {
  const [rows] = await pool.query('SELECT * FROM users');
  res.json(rows);
});

app.get('/groups', async (req, res) => {
  const [rows] = await pool.query('SELECT * FROM expenses_groups');
  res.json(rows);
});

app.get('/expenses', async (req, res) => {
  const [rows] = await pool.query('SELECT * FROM expenses');
  res.json(rows);
});

app.post('/users', async (req, res) => {
  const { name, email, password } = req.body;
  const [result] = await pool.query('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [name, email, password]);
  res.status(201).json({ id: result.insertId, name, email });
});

app.listen(3000, () => {
    console.log("Server is running on port http://localhost:3000/");
});


