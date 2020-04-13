let corporationdonations = []

export const useCorporationDonations = () => {
    return corporationdonations.slice();
}

export const getCorporationDonations = () => {
    return fetch("http://localhost:2100/corporatedonations")
        .then(response => response.json())
        .then(
            (parsedCorporationDonations) => {
                corporationdonations = parsedCorporationDonations;
            }
        )
}