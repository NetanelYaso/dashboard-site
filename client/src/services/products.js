const productsApi = "http://localhost:8080/products";


export const getProducts = async () => {
    try {
        return await fetch(productsApi)
            .then(res => res.json())
            .then(result => console.log(result))
    }
    catch (error) {
        throw error
    }
}