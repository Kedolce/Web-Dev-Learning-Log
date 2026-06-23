const container = document.querySelector("#container");
const pesan = document.querySelector("#pesan");
const btnHapus = document.querySelector("#btnHapus");

btnHapus.addEventListener("click", ()=>{
    pesan.remove();
});