const openButton = document.getElementById("openButton");
const envelope = document.getElementById("envelope");

openButton.addEventListener("click", function () {

    // Tombol tidak bisa diklik dua kali
    openButton.disabled = true;

    // Mulai animasi amplop
    envelope.classList.add("open");

    // Hilangkan tombol
    openButton.classList.add("hide");

    // Setelah animasi selesai,
    // masuk ke halaman detail
    setTimeout(function () {

        window.location.href = "detail.html";

    }, 2200);

});
