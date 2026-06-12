import express from "express";
import { specs, swaggerUi } from "./swagger.js";

const app = express();

const PORT = 8000;
const HOSTNAME = "localhost";

app.use(express.json());

app.use("/docs", swaggerUi.serve, swaggerUi.setup(specs));

const daftarFilm = [];

/**
 * @swagger
 * /film:
 *   get:
 *     summary: daftar film yang disimpan
 *     responses:
 *       200:
 *         description: Daftar film berhasil diambil
 *       404:
 *         description: Daftar film tidak ditemukan
 */

// ambil semua film
app.get("/film", (req, res) => {
  res.json(daftarFilm);
});

// ambil satu film
app.get("/film/:id", (req, res) => {
  const film = daftarFilm.find(m => m.id === parseInt(req.params.id));

  if (!film) {
    return res.status(404).json({ message: "Film tidak ditemukan" });
  }

  return res.status(200).json(film);
});

// tambah film
app.post("/film", (req, res) => {
  const film = {
    id: daftarFilm.length + 1,
    title: req.body.title,
    genre: req.body.genre,
    year: req.body.year
  };

  daftarFilm.push(film);
  res.status(201).json(film);
});

// hapus film
app.delete("/film/:id", (req, res) => {
  const indexfilm = daftarFilm.findIndex(f => f.id === Number(req.params.id));

  if (indexfilm === -1) {
    return res.status(404).json({ message: "Film tidak ditemukan" });
  }

  const filmDihapus = daftarFilm.splice(indexfilm, 1);
  return res.json(filmDihapus[0]);
});

app.listen(PORT, HOSTNAME, () => {
  console.log(`Server running at http://${HOSTNAME}:${PORT}/`);
});