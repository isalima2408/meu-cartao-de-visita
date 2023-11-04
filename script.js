function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")

    const img = document.querySelector("#perfil img")
    
    if(html.classList.contains("light")) {
        img.setAttribute("src", "https://static.vecteezy.com/system/resources/previews/020/911/729/non_2x/profile-icon-avatar-icon-user-icon-person-icon-free-png.png")
    } else {
        img.setAttribute("src", "https://img.freepik.com/vetores-premium/icone-de-perfil-de-pessoas_24877-40756.jpg")
    }
}