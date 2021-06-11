const menuKnap = document.querySelector(".menuknap");
let menuOpen = false;
const scrooled = document.querySelector(".scrool_down");
let scrool = false;

window.addEventListener("load", sidenVises);

function sidenVises() {
  console.log("sidenVises");
}

menuKnap.addEventListener("click", () => {
  if (!menuOpen) {
    menuKnap.classList.add("open");
    menuOpen = true;
    document.querySelector("#menu").classList.remove("hidden");
  } else {
    menuKnap.classList.remove("open");
    menuOpen = false;
    document.querySelector("#menu").classList.add("hidden");
  }
});

// scrooled.addEventListener("click", () => {
//   console.log("scrolled");
//   window.scrollBy(0, 100);
// });
