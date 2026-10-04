const openButton = document.getElementById("openButton");
const envelope = document.querySelector(".envelope");

openButton.addEventListener("click", () => {

    // Cegah klik dua kali
    openButton.disabled = true;

    // Hilangkan tombol
    openButton.classList.add("hide");

    // =========================
    // TAHAP 1
    // BUKA TOP FLAP
    // =========================

    envelope.classList.add("opened");


    // =========================
    // TAHAP 2
    // SURAT KELUAR
    // =========================

    setTimeout(() => {

        envelope.classList.add("letter-out");

    }, 700);


    // =========================
    // TAHAP 3
    // PINDAH KE DETAIL
    // =========================

    setTimeout(() => {

        window.location.href = "detail.html";

    }, 2200);

});
