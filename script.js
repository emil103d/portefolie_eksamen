const menuKnap = document.querySelector(".menuknap");
let menuOpen = false;
const ScrollToTop = document.querySelector("#btnScrollToTop");

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

ScrollToTop.addEventListener("click", () => {
  // window.scrollTo(0, 0);
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
