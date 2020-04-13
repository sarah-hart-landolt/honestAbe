import { Pac } from "./pac.js"
import { usePacs } from "./PacProvider.js"
import { useCorporations } from "../corporations/CorporationProvider.js"
import { useCorporationDonations } from "../relationships/corporatedonationsProvider.js"


const contentTarget = document.querySelector(".pacsContainer")

const render = pacsToRender => {

    const corporations = useCorporations()
    const corporationdonations = useCorporationDonations()
    
    contentTarget.innerHTML = pacsToRender.map(
        (pacObject) => {
            const corporateDonationMatches = corporationdonations.filter(corpdono => 
     corpdono.pacId === pacObject.id)
            
            const corps= corporateDonationMatches.map(cdr => {
                return corporations.find(corporation=> corporation.id === cdr.corporationId)})
            
        
            return Pac(pacObject, corps, corporateDonationMatches)
        }
    ).join("")
}

export const pacList = () => {
    const pacs= usePacs()
        render(pacs)
}
