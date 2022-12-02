const oredersApi = "http://localhost:8080/orders";


export const getOrders = async () => {
    try {
        return await fetch(oredersApi)
            .then(res => res.json())
            .then(result => console.log(result))

    }
    catch (err) {
        throw err;
    }
}