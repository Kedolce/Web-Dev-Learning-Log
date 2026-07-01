const produk = {
    nama: "Keyboard Mechanical",
    harga: 450000,
    stok: 12,
    kategori: "Elektronik",
    warna: "biru",
    rating: 4,
};

// produk.garansi = "1th";
// produk.berat = "1kg";

// console.log(produk);

// console.log ("Nama Produk : " + produk.nama);
// console.log ("Harga : " + produk.harga);
// console.log ("stok : " + produk.stok);

// // cara akses memakai var laen
// const field = "harga";

// console.log(produk[field]);

// console.log("Nama produk: " + produk.nama);
// if(produk.stok > 0){
//     console.log(produk.nama + " tersedia");
// } else{
//     console.log(produk.nama + " habis");
// }

const dataBarang = document.getElementById("dataBarang");
const btnContainer = document.getElementById("btnContainer");

const namaBarang = document.querySelector(".namaBarang");
const hargaBarang = document.querySelector(".hargaBarang");
const stokBarang = document.querySelector(".stokBarang");
const kategoriBarang = document.querySelector(".kategoriBarang");
const status = document.querySelector(".status");

namaBarang.textContent = "Nama Barang: " + produk.nama;
hargaBarang.textContent = "harga Barang: " + produk.harga;
stokBarang.textContent = "stok Barang: " + produk.stok;
kategoriBarang.textContent = "kategori Barang: " + produk.kategori;

if(produk.stok > 0){
    status.textContent = produk.nama + " Tersedia.";
    status.classList.add("text-emerald-400", "font-bold");
} else {
    status.textContent = produk.nama + " Tidak Tersedia.";
    status.classList.add("text-red-400", "font-bold")
};

const tambahStok = document.querySelector(".tambahStok");
const kurangiStok = document.querySelector(".kurangiStok");
const diskon = document.querySelector(".diskon");
const reset = document.querySelector(".reset");

tambahStok.addEventListener("click", () => {
    produk.stok++;
    stokBarang.textContent = "stok Barang: " + produk.stok;
});

kurangiStok.addEventListener("click", () => {
    produk.stok--;
    stokBarang.textContent = "stok Barang: " + produk.stok;
});

diskon.addEventListener("click", () => {

    const diskon = 0.1;
    const hargaDiskon = produk.harga * diskon;
    const hargaSetelahDiskon = produk.harga - hargaDiskon;
    produk.harga = hargaSetelahDiskon;
    hargaBarang.textContent = "harga Barang: " + produk.harga;

});

reset.addEventListener("click", () => {
    produk.harga = 0;
    hargaBarang.textContent = "harga Barang: " + produk.harga;
})