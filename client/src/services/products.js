const productsApi = "http://localhost:8080/products";


export const getProducts = async () => {
    try {
        return await fetch(productsApi)
            .then(res => res.json())      
    }
    catch (error) {
        throw error
    }
}