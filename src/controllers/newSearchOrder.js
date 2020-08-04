const SearchOrder = require("../models/SearchOrder");

const dummySearchData = {
    query: "calefones",
    provider: "miAbuelaLosPatea",
    options: {
        user: "abuela",
        password: "nona"
    },
    callbackUrl: "https://ensayosypoemas.wordpress.com"
}

function newSearchOrder() {
    const searchOrder = new SearchOrder;
    searchOrder.searchData = dummySearchData;
    searchOrder.status = "received";
    searchOrder.productList = [];
    
    return searchOrder;
}

module.exports = newSearchOrder;



