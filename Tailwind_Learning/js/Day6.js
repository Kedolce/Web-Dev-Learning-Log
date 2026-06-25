const form1 = document.querySelector("#formLogin1");
const input1 = document.querySelector("#input1");

form1.addEventListener("submit", (e) => {
  e.preventDefault();

  console.log(`Halo, ${input1.value}`);
});

const form2 = document.querySelector("#formLogin2");
const input2 = document.querySelector("#input2");

input2.addEventListener("input", (e) => {
  e.preventDefault();
  console.log(e.target.value);
});

const form3 = document.querySelector("#formLogin3");
const input3 = document.querySelector("#input3");

input3.addEventListener("change", (e) => {
  e.preventDefault();
  console.log(e.target.value);
});

const form4 = document.querySelector("#formLogin4");
const input4 = document.querySelector("#input4");

input4.addEventListener("keydown", (e) => {
  e.preventDefault();
  console.log(e.key);
});

const form5 = document.querySelector("#formLogin5");
const input5 = document.querySelector("#input5");

input5.addEventListener("keyup", (e) => {
  e.preventDefault();
  console.log(e.key);
});

const form6 = document.querySelector("#formLogin6");
const input6 = document.querySelector("#input6");

input6.addEventListener("focus", (e) => {
  e.preventDefault();
  console.log("Silahkan isi nama anda");
});

const form7 = document.querySelector("#formLogin7");
const input7 = document.querySelector("#input7");

input7.addEventListener("blur", (e) => {
  e.preventDefault();
  if (input7.value.length < 8) {
    alert("Kolom harus berisi minimal 8 karakter!");
  } else {
    console.log("wazaaaaaaaaaaaa");
  }
});

const form8 = document.querySelector("#formLogin8");
const input8 = document.querySelector("#input8");

input8.addEventListener("dblclick", (e) => { // pake buat semacam double click di video atau foto
  e.preventDefault();
  console.log("Mode edit aktif");
});

const cat = document.querySelector("#cat");

cat.addEventListener("mouseenter", (e) => {
    e.preventDefault();
    console.log("anjay");
})

const link = document.querySelector("a");

link.addEventListener("click", (e) => {
    e.preventDefault();

    console.log("Perpindahan dibatalkan");
});

