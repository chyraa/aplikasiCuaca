const express = require('express');
const path = require('path');
const app = express();

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
app.listen(5000, () => {
    console.log('Server berjalan pada port 5000.');
});
