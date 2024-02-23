// BARRA DO CTA (ENTRADA E SAÍDA)
window.addEventListener("scroll", () => {
  const ctaBar = document.querySelector("#ctaBar")
  const heroSection = document.querySelector(".hero")
  const heroBottomPosition = heroSection.getBoundingClientRect().bottom

  if (heroBottomPosition < 0) {
    ctaBar.classList.add("show")
  } else {
    ctaBar.classList.remove("show")
  }
})

// POPUP PORTFÓLIO
const popup = document.querySelector(".popup-wrapper")
const pageWrapper = document.querySelector(".popup-page")
const pageImage = document.querySelector("#page")
const ctaBar = document.querySelector("#ctaBar")
function handleOpenPopup(index) {
  const urlPage = [
    "./src/images/lp-paulo-full.webp",
    "./src/images/lp-isabella-full.webp",
    "./src/images/lp-carolina-full.webp",
    "./src/images/lp-andre-full.webp",
  ]
  pageImage.src = urlPage[index]
  popup.style.display = "flex"
  ctaBar.classList.remove("show")
}
function handleClosePopup() {
  const ctaBar = document.querySelector("#ctaBar")
  popup.style.display = "none"
  ctaBar.classList.add("show")
}
pageWrapper.addEventListener("click", (event) => {
  event.stopPropagation()
})
