const openButton = document.getElementById("openButton");
const envelope = document.getElementById("envelope");

openButton.addEventListener("click", () => {
    // 1. Cegah tombol diklik berkali-kali
    openButton.disabled = true;

    // 2. Mulai animasi membuka amplop & kertas naik
    envelope.classList.add("opened");

    // 3. Hilangkan tombol OPEN
    openButton.classList.add("hide");

    // 4. Tunggu animasi amplop + surat selesai, lalu pindah halaman
    setTimeout(() => {
        window.location.href = "detail.html";
    }, 2200);
});
