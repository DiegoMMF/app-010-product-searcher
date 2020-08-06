exports.dummySearchOrder = {
    searchData = {
        query: "calefones",
        provider: "miAbuelaLosPatea",
        options: {
            user: "abuela",
            password: "nona"
        },
        callbackUrl: "https://ensayosypoemas.wordpress.com"
    },
    status: "received",
    product = {
        SKU: "123",
        productName: "silla",
        actualPrice: 9.99,
        originalPrice: 19.99,
        productCategoryID: "sillas",
        productDescription: "silla baratita, baratita",
        imagesUrl: [
            "https://prueba-diego.s3.us-east-2.amazonaws.com/tapa-ensayo.jpg",
            "https://prueba-diego.s3.us-east-2.amazonaws.com/tapa-novela.jpg",
            "https://prueba-diego.s3.us-east-2.amazonaws.com/tapa-poemario.png",
            "https://prueba-diego.s3.us-east-2.amazonaws.com/tapa-tratado.jpg"
        ],
        relatedQueries: [
            "calefones",
            "heladeras"
        ]
    }
};