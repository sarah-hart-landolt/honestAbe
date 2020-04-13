export const Politician = (politicianObject) => {
    return `
    <article class="politicians">
    <section class="politician">
        <header class="politician__name">
            <h1>${politicianObject.name.first} ${politicianObject.name.last}</h1>
        </header>
        <div class="politician__info">
            <div>${politicianObject.age}</div>
            <div>Represents:${politicianObject.district}</div>
        </div>
    </section>
</article>
    `  
}