const openButton = document.getElementById("openButton");

openButton.addEventListener("click", () => {

    openButton.disabled = true;

    // Animasi tombol
    openButton.classList.add("hide");

    // Buka amplop
    document.querySelector(".envelope").classList.add("opened");

    // Setelah animasi selesai, masuk ke detail
    setTimeout(() => {
        window.location.href = "detail.html";
    }, 1500);

});
