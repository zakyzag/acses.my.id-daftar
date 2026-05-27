function ambilLokasi(){

  if(navigator.geolocation){

    navigator.geolocation.getCurrentPosition(

      function(position){

        const lat = position.coords.latitude;
        const lng = position.coords.longitude;

        const link =
        `https://www.google.com/maps?q=${lat},${lng}`;

        document.getElementById("maps").value = link;

      },

      function(){

        alert("Lokasi gagal diambil");

      }

    );

  }else{

    alert("Browser tidak mendukung lokasi");

  }

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
