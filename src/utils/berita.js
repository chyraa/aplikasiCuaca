const express = require('express');
const path = require('path');
const app = express();

const request = require('postman-request');

const getBerita = (callback) => {
    const apiKey = '81b3aa3ded2e1be8f66f13c1929caa21'; // Ganti dengan API key Anda
    const url = `http://api.mediastack.com/v1/news?access_key=${apiKey}&countries=id&limit=5`;

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Tidak dapat menghubungi layanan berita!', undefined);
        } else if (body.error) {
            callback('Gagal mengambil berita. Silakan cek API Key atau endpoint.', undefined);
        } else {
            callback(undefined, body.data);
        }
    });
};

module.exports = getBerita;


// Mengatur template engine (contoh: menggunakan hbs)
app.set('view engine', 'hbs');

// Mengatur direktori untuk file statis
const direktoriPublic = path.join(__dirname, '../public');
app.use(express.static(direktoriPublic));

// Halaman utama
app.get('', (req, res) => {
    res.send('<h1>Selamat datang di halaman berita</h1>');
});

// Halaman berita
app.get('/berita', (req, res) => {
    res.render('tentang', {
        judul: 'Tentang Saya',
        nama: 'cece'
    });
});

// Menjalankan server
app.listen(3000, () => {
    console.log('Server berjalan pada port 3000.');
});
