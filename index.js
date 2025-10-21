console.log("script loaded");

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("regForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const first = document.getElementById("firstName").value;
    const last = document.getElementById("lastName").value;
    const nilai = parseFloat(document.getElementById("nilai").value);

   
    let huruf;
    if (nilai >= 85 && nilai <= 100) huruf = "A";
    else if (nilai >= 80) huruf = "A-";
    else if (nilai >= 75) huruf = "B+";
    else if (nilai >= 70) huruf = "B";
    else if (nilai >= 65) huruf = "B-";
    else if (nilai >= 60) huruf = "C+";
    else if (nilai >= 55) huruf = "C";
    else if (nilai >= 40) huruf = "D";
    else huruf = "E";

    console.log(`Nama Lengkap : ${first} ${last}`);
    console.log(`Nilai Angka  : ${nilai}`);
    console.log(`Nilai Huruf  : ${huruf}`);
  });
});
