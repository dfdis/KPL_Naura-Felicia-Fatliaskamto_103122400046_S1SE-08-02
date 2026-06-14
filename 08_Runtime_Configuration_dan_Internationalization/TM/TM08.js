import dotenv from 'dotenv';
dotenv.config({ quiet: true });

const response = await fetch(process.env.BASE_API);
const data = await response.json();

console.log(data);

const rates = data.idr;
const jumlahRupiah = [25000, 50000, 100000];

const formatIDR = (nilai) =>
    new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR'
    }).format(nilai);

const formatCNH = (nilai) =>
    new Intl.NumberFormat('zh-CN', {
        style: 'currency',
        currency: 'CNY'
    }).format(nilai);

const formatEUR = (nilai) =>
    new Intl.NumberFormat('de-DE', {
        style: 'currency',
        currency: 'EUR'
    }).format(nilai);

const waktu = new Intl.DateTimeFormat('id-ID', {
    dateStyle: 'full',
    timeStyle: 'medium'
}).format(new Date());

console.log(`Kurs diambil pada: ${waktu}\n`);

for (const rupiah of jumlahRupiah) {
    const cnh = rupiah * rates.cnh;
    const eur = rupiah * rates.eur;
    console.log(`${formatIDR(rupiah)}`);
    console.log(`CNH : ${formatCNH(cnh)}`);
    console.log(`EUR : ${formatEUR(eur)}`);
    console.log('----------------------');
}