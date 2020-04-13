import { getPoliticians } from "./politicians /PoliticianProvider.js";
import { politicianList } from "./politicians /PoliticianList.js";
import { getCorporations } from "./corporations/CorporationProvider.js";
import { corporationList } from "./corporations/CorporationList.js";
import { getPacs } from "./pacs/PacProvider.js";
import { pacList } from "./pacs/PacList.js";
import { getCorporationDonations } from "./relationships/corporatedonationsProvider.js";


getPoliticians()
    .then(politicianList)


getCorporations()
    .then(corporationList)

getPacs()
    .then(getCorporations)
    .then(getCorporationDonations)
    .then(pacList)