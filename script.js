const openButton = document.getElementById("openButton");
const envelope = document.querySelector(".envelope");

openButton.addEventListener("click", () => {

    // Cegah tombol diklik berkali-kali
    openButton.disabled = true;

    // Mulai animasi membuka amplop
    envelope.classList.add("opened");

    // Hilangkan tombol OPEN
    openButton.classList.add("hide");

    // Tunggu animasi amplop + surat selesai
    setTimeout(() => {

        // Masuk ke halaman detail
        window.location.href = "detail.html";

    }, 2200);

});
