const daftarForm = document.getElementById("daftarForm");

daftarForm.addEventListener("submit", (e) => {

  e.preventDefault();

  const data = {
    nama: document.getElementById("nama").value,
    hp: document.getElementById("hp").value,
    alamat: document.getElementById("alamat").value,
    paket: document.getElementById("paket").value,
    status: "Menunggu"
  };

  firebase.database().ref("pendaftaran").push(data);

  alert("Pendaftaran berhasil dikirim!");

  daftarForm.reset();

});
