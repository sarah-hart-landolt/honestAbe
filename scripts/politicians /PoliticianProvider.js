let politicians = []

export const usePoliticians = () => {
    return politicians.slice();
}

export const getPoliticians = () => {
    return fetch("http://localhost:2100/politicians")
        .then(response => response.json())
        .then(
            (parsedPoliticians) => {
                politicians = parsedPoliticians;
            }
        )
}