let data = [
    {
        id: '001',
        name: 'Oil filter'
    },

    {
        id: '002',
        name: "Windshield wiper"
    },
    {
        id: '003',
        name: "Xenon Headlight"
    },
    {
        id: '004',
        name: "Spoiler",
    }
]


//the whole module is a controller, each value of the key are their action
module.exports = {
    catalog: (req, res) => {
        // res.write('Hello from Catalog Page')
        // res.end()

        res.render('catalog', {products: data})

    },
    details: (req, res) => {
        // res.write('Hello from Main Page')
        // res.end()
        // send() is a combination method of write() & end()
        // console.log(req.params.productId)
        let product = data[req.params.productId]
        res.send(
            `
        <h1>Hello from Product 1</h1>
        <a href="/catalog">Back to Catalog</a>
        <p>Information about product 1</p>
        <p>${product}</p>
        `
        )
    }
}
