function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#perfil img")

  if(html.classList.contains("light")) {
    img.setAttribute("src", "https://img.freepik.com/vetores-premium/icone-de-perfil-de-pessoas_24877-40756.jpg")
  } else {
    img.setAttribute("src", "https://cdn-icons-png.flaticon.com/512/5987/5987462.png")
  }
}
