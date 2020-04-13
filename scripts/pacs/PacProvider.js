let pacs = []

export const usePacs = () => {
    return pacs.slice();
}

export const getPacs = () => {
    return fetch("http://localhost:2100/pacs")
        .then(response => response.json())
        .then(
            (parsedpacs) => {
                pacs = parsedpacs;
            }
        )
}