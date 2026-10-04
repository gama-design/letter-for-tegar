const openButton = document.getElementById("openButton");
const envelope = document.querySelector(".envelope");

openButton.addEventListener("click", () => {

    // Mencegah tombol diklik berkali-kali
    openButton.disabled = true;

    // Mulai animasi envelope
    envelope.classList.add("opened");

    // Hilangkan tombol OPEN
    openButton.classList.add("hide");

    // Tunggu animasi selesai
    // lalu masuk ke halaman surat
    setTimeout(() => {

        window.location.href = "detail.html";

    }, 1900);

});
