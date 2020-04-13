import { usePoliticians } from "./PoliticianProvider.js"
import { Politician } from "./politician.js"

const contentTarget = document.querySelector(".politiciansContainer")

const render = politiciansToRender => {

    contentTarget.innerHTML = politiciansToRender.map(
        (politicianObject) => {
  
            return Politician(politicianObject)
        }
    ).join("")
}

export const politicianList = () => {
    const politicians= usePoliticians()
    render(politicians)
}
