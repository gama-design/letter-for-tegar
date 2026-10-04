const openButton = document.getElementById("openButton");
const envelope = document.querySelector(".envelope");

openButton.addEventListener("click", () => {

    openButton.disabled = true;

    envelope.classList.add("opened");

    openButton.classList.add("hide");

    setTimeout(() => {

        window.location.href = "detail.html";

    }, 1800);

});
