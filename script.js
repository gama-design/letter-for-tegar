const openButton = document.getElementById("openButton");
const envelope = document.querySelector(".envelope");

openButton.addEventListener("click", () => {

    // Cegah klik berkali-kali
    openButton.disabled = true;

    // Mulai animasi amplop
    envelope.classList.add("opened");

    // Hilangkan tombol OPEN
    openButton.classList.add("hide");

    // Tunggu animasi selesai
    setTimeout(() => {

        // Masuk ke halaman detail
        window.location.href = "detail.html";

    }, 1500);

});
