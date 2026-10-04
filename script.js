const openButton = document.getElementById("openButton");
const envelope = document.getElementById("envelope");

openButton.addEventListener("click", () => {
    // 1. Nonaktifkan tombol agar tidak diklik dua kali
    openButton.disabled = true;

    // 2. Jalankan animasi amplop & kertas
    envelope.classList.add("opened");

    // 3. Sembunyikan tombol OPEN
    openButton.classList.add("hide");

    // 4. Setelah animasi selesai (2.2 detik), pindah ke halaman detail
    setTimeout(() => {
        window.location.href = "detail.html";
    }, 2200);
});
