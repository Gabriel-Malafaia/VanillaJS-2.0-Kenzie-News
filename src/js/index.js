import {Api} from "./api.js"
const mainNews = document.querySelector(".others__news--container")
const bannerNews = document.querySelector(".main__news")

async function criarCard() {
    const news = await Api.news()
    let classeSection = ''
    let classeContent = ''
    let classeImagem  = ''
    let localAppend   = ''

    console.log(news)

    news.forEach(noticia => {
        const {titulo,resumo,categoria,fonte,imagem,id} = noticia
        if (id == 11) {
            classeSection = "main__news--container"
            classeContent = "main__news--text"
            classeImagem  = "main__news--img"
            localAppend = bannerNews
        } else {
            classeSection = 'others__news--card'
            classeContent = 'others__news--text'
            classeImagem  = 'others__news--image'
            localAppend = mainNews
        }

        const sectionCard = document.createElement("section")
        sectionCard.classList.add(`${classeSection}`)

        const divImage = document.createElement("div")
        const image = document.createElement("img")
        divImage.classList.add(`${classeImagem}`)
        image.src = `${imagem}`
        divImage.appendChild(image)

        const divText = document.createElement("div")
        divText.classList.add(`${classeContent}`)
        const pCategory = document.createElement("p")
        pCategory.innerText = `${categoria}`
        const h3Title = document.createElement("h3")
        h3Title.innerText = `${titulo}`
        const pResume = document.createElement("p")
        pResume.innerText = `${resumo}`
        const spanFont = document.createElement("span")
        spanFont.innerText = `${fonte}`

        divText.append(pCategory, h3Title, pResume, spanFont)
        sectionCard.append(divImage, divText)
        localAppend.appendChild(sectionCard)
    })
}

criarCard()

