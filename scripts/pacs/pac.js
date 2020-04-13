export const Pac = (pacObject, corporationArray) => {
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
             <ul>${
                corporationArray.map(corporation=> {
                return `<li>${corporation.company}</li>`}
                ).join(" ")
            }
            </ul>
        </div>
    </section>
</article>
    `  
}