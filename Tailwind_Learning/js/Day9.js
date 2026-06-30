// const buah = ["Apel", "Jeruk", "Mangga"];
// console.log(buah[1]);

// buah.push("Jambut");
// console.log(buah);

// buah.pop();
// console.log(buah);

// buah.unshift("Jambut");
// console.log(buah);

// buah.shift();
// console.log(buah);


const role = ["admin", "pegawai"];

console.log(role.indexOf("admin"));
console.log(role.indexOf("pegawai"));
console.log(role.indexOf("janitor")); // gaada

console.log(role.includes("admin"));

if(role.includes("admin")){
    console.log("Simple login validation is reall.")
};

// const buah = [
//     "Apel",
//     "Jeruk",
//     "Mangga",
//     "Durian"
// ];

// const hasil = buah.slice(1, (3 + 1));
// console.log(hasil);

const buah = [
    "Apel",
    "Jeruk",
    "Mangga",
    "Durian"
];

buah.splice(1,1);

console.log(buah);

buah.splice(1, 0, "salak bali");
console.log(buah);