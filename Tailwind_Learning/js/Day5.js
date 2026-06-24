/* Ubah judul */
const ubahJudul = document.getElementById("ubahJudul");
const btnUbahJudul = document.getElementById("btnUbahJudul");

btnUbahJudul.addEventListener("click", () => {
    if (ubahJudul.textContent === "Saya Semakin Paham DOM") {
    ubahJudul.textContent = "Belajar Javascript";
    }
    else{
        ubahJudul.textContent = "Saya Semakin Paham DOM";
    }
});
//-------------------------------------------------------------

// darkmode
const btnUbahWarnaBody = document.getElementById("btnUbahWarnaBody");

btnUbahWarnaBody.addEventListener("click", () => {
    document.body.classList.toggle("bg-black");
    document.body.classList.toggle("text-white");
});
//-------------------------------------------------------------

//popup
const btnKirim = document.getElementById("btnKirim");
const popup = document.getElementById("popup");
const hapusPopup = document.getElementById("hapusPopup");

btnKirim.addEventListener("click", () => {
    popup.classList.remove("hidden");
});

hapusPopup.addEventListener("click", () => {
    popup.classList.add("hidden");
});
//---------------------------------------------------------------

//tambah pesan
const tambahPesan = document.getElementById("tambahPesan");
const btnTambahPesan = document.getElementById("btnTambahPesan");
const btnHapusTerakhir = document.getElementById("btnHapusTerakhir");

btnTambahPesan.addEventListener("click", () => {
    const p = document.createElement("p");
    p.textContent = "Halo Saya Sedang Belajar DOM";
    tambahPesan.appendChild(p);
})

btnHapusTerakhir.addEventListener("click", () => {
const all_p = document.querySelectorAll("#tambahPesan p");
    const pesanTerakhir = all_p[all_p.length - 1];

    if(all_p.length > 0){
        pesanTerakhir.remove();
    } else{
        alert("Pesan Habis!");
    }
});
//-------------------------------------------------------------