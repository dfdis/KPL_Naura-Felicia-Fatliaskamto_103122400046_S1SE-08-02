const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const app = express();
const PORT = 3000;

const menu = {
    bakmi: [
        "Bakmi Ayam",
        "Bakmi Bakso"
    ],
    rames: [
        "Nasi Rames Ayam",
        "Nasi Rames Telur"
    ]
};

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Menu API',
            version: '1.0.0'
        }
    },
    apis: ['./TP09.js']
};

const specs = swaggerJsdoc(options);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

/**
 * @swagger
 * /menu:
 *   get:
 *     summary: Ambil semua kategori menu
 *     responses:
 *       200:
 *         description: Daftar kategori berhasil diambil
 */
app.get('/menu', (req, res) => {
    res.json({
        kategori_tersedia: Object.keys(menu)
    });
});

app.listen(PORT, () => {
    console.log(`Server berjalan di port ${PORT}`);
});