const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/', (req, res) => {
    res.json({
        pesan: "API berhasil dijalankan"
    });
});

app.listen(PORT, () => {
    console.log(`Server berjalan di port ${PORT}`);
});