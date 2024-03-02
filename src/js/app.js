// ATUALIZAÇÃO DO ANO ATUAL NO FOOTER
const yearElement = document.querySelector("#currentYear")
const currentDate = new Date()
const fullYear = currentDate.getFullYear()
yearElement.textContent = fullYear

// LOADING VIDEO YOUTUBE
document.addEventListener("DOMContentLoaded", () => {
  const urlVideo =
    "https://www.youtube.com/embed/L6_KS090YTg?si=0xoxZocKG-Ii1-kg"
  const playerContainer = document.querySelector(".player")
  const overlayVideo = document.querySelector("#overlay-image")

  overlayVideo.addEventListener("click", (event) => {
    event.display = "none"
    playerContainer.innerHTML = `<iframe src="${urlVideo}" title="Entenda o método DROP de criação de Landing Pages" frameborder="0" allowfullscreen></iframe>`
  })
})

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
