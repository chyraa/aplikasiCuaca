console.log('Client side javascript file diproses')

const weatherform = document.querySelector('form') 
const search = document.querySelector('input') 
const pesanSatu = document.querySelector('#pesan-1') 
const pesanDua = document.querySelector('#pesan-2') 

// pesanSatu.textContent = 'From javascript' 
weatherform.addEventListener('submit', (e) => { 
    e.preventDefault() 
    const location = search.value 

    pesanSatu.textContent = 'Sedang mencari lokasi ..' 
    pesanDua.textContent = '' 

    fetch('http://localhost:5000/infoCuaca?address=' + location)
    .then((response) => {
        console.log('Response Status:', response.status); // Log status
        return response.json();
    })
    .then((data) => {
        console.log('Data Received:', data); // Log data yang diterima
        if (data.error) {
            pesanSatu.textContent = data.error;
        } else {
            pesanSatu.textContent = data.lokasi;
            pesanDua.textContent = data.prediksiCuaca;
        }
    })
    .catch((error) => {
        console.error('Error fetching data:', error); // Log error jika ada
        pesanSatu.textContent = 'Terjadi kesalahan saat menghubungi server.';
    });

}) 