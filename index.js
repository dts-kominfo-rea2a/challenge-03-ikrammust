// ! JANGAN DIMOFIDIKASI
const dataBelanjaan = [
  {
    id: "D-10001",
    nama: "Minyak Goreng Delima",
    harga: 25000,
    kuantitas: 2,
  },
  {
    id: "D-10020",
    nama: "Beras Mamos",
    harga: 48000,
    kuantitas: 1,
  },
  {
    id: "F-00010",
    nama: "Larutan Cap Kaki Empat",
    harga: 7500,
    kuantitas: 8,
  },
];

// boleh dimodifikasi bila ingin menggunakan deklarasi fungsi yang normal
const listBelanjaan = (dataBelanjaan) => {
  // membuat array penampung string list belanjaan
  let stringListBelanjaan = [];

  // mengisi string list belanjaan
  for(let counter = 0; counter < dataBelanjaan.length; counter++) {
    stringListBelanjaan.push(`- ${dataBelanjaan[counter].nama} x ${dataBelanjaan[counter].kuantitas}`);
  };

  // return hasil string belanjaan tadi
  return stringListBelanjaan;
};


// boleh dimodifikasi bila ingin menggunakan deklarasi fungsi yang normal
const totalBelanjaan = (dataBelanjaan) => {
  // total harga belanjaan
  let totalHarga = 0;

  // menghitung total harga belanjaan
  for (let index = 0; index < dataBelanjaan.length; index++) {
    totalHarga += dataBelanjaan[index].harga * dataBelanjaan[index].kuantitas;
  }

  // return total harga belanjaan
  return totalHarga;
};

// ! JANGAN DIMODIFIKASI
const main = () => {
  console.log("Selamat datang customer");

  console.log("Belanjaan Anda adalah:");
  console.log(listBelanjaan?.(dataBelanjaan)?.join("\n"));
  console.log(
    "\nTotal Belanjaan Anda adalah Rp. " + totalBelanjaan?.(dataBelanjaan)
  );
};

main();

module.exports = {
  dataBelanjaan,
  listBelanjaan,
  totalBelanjaan,
};
