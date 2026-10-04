const openButton = document.getElementById("openButton");
const envelope = document.querySelector(".envelope");
const cover = document.querySelector(".cover");

openButton.addEventListener("click", () => {

    // Cegah tombol diklik berkali-kali
    openButton.disabled = true;

    // Buka flap amplop
    envelope.classList.add("opened");

    // Hilangkan tombol
    openButton.classList.add("hide");

    // Setelah amplop terbuka,
    // cover akan menghilang
    setTimeout(() => {
        cover.classList.add("fade-out");
    }, 1500);

});
