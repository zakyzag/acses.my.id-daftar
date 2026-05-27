function ambilLokasi() {

  if (!navigator.geolocation) {
    alert("Browser tidak mendukung GPS");
    return;
  }

  navigator.geolocation.getCurrentPosition(

    (position) => {

      const lat = position.coords.latitude;
      const lng = position.coords.longitude;

      const mapsLink =
        `https://maps.google.com/?q=${lat},${lng}`;

      document.getElementById("maps").value =
        mapsLink;

    },

    (error) => {

      alert("Gagal mengambil lokasi");

      console.log(error);

    }

  );

}

const daftarForm = document.getElementById("daftarForm");

daftarForm.addEventListener("submit", (e) => {

  e.preventDefault();

  const data = {
    nama: document.getElementById("nama").value,
    hp: document.getElementById("hp").value,
    alamat: document.getElementById("alamat").value,
    paket: document.getElementById("paket").value,
    maps: document.getELementById("maps").value
    status: "Menunggu"
  };

  firebase.database().ref("pendaftaran").push(data);

  alert("Pendaftaran berhasil dikirim!");

  daftarForm.reset();

});
