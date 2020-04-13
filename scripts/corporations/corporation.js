export const Corporation = (corporationObject) => {
    return `
    <article class="corporations">
    <section class="corporation">
        <header class="corporation__name">
            <h1>${corporationObject.company}</h1>
        </header>
        <div class="corporation__info">
            <div>Address: ${corporationObject.address}</div>
        </div>
    </section>
</article>
    `  
}