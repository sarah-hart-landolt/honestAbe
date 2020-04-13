export const Pac = (pacObject, corporationArray, corporateDonationMatches) => {
    return `
    <article class="pacs">
    <section class="pac">
        <header class="pac__name">
            <h1>PACNAME: ${pacObject.registeredName}</h1>
        </header>
        <div class="pac__info">
            <div>${pacObject.address}</div>
        </div>
        <div class="pac__donors">
            <h2>Donors</h2>
             <ul>
            ${
                corporateDonationMatches.map(cdm=> {
                const singleCorp = corporationArray.find(corp=> corp.id === cdm.corporationId)
                return `<li>${singleCorp.company} ($${cdm.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")})</li>`}
                ).join(" ")
            }
            </ul>
           
        </div>
    </section>
</article>
    `  
}