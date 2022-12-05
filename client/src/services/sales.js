const salesApi = "http://localhost:8080/sales";

export const getSales = async () => {
    try {
        return await fetch(salesApi)
            .then(res => res.json())
    }
    catch (error) {
        throw error;
    }
}