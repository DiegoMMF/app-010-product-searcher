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

exports.newSearchOrder = () => {

    const searchOrder = new SearchOrder;
    
    searchOrder.searchData = dummySearchData;
    searchOrder.status = "received";
    searchOrder.productList = [];

    searchOrder.save((err) => {
        if (err) console.log(err)
    });
    
    return searchOrder;
};