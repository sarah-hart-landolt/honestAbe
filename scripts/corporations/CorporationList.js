import { Corporation } from "./corporation.js"
import { useCorporations } from "./CorporationProvider.js"

const contentTarget = document.querySelector(".corporationsContainer")

const render = corporationsToRender => {

    contentTarget.innerHTML = corporationsToRender.map(
        (corporationObject) => {
  
            return Corporation(corporationObject) 
        }
    ).join("")
}

export const corporationList = () => {
    const corporations= useCorporations()
        render(corporations)
}
