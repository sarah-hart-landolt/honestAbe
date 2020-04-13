let corporations = []

export const useCorporations = () => {
    return corporations.slice();
}

export const getCorporations = () => {
    return fetch("http://localhost:2100/corporations")
        .then(response => response.json())
        .then(
            (parsedcorporations) => {
                corporations = parsedcorporations;
            }
        )
}