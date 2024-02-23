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
