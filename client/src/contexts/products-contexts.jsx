import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react"
import { getProducts } from "../services/products"
export  const productsContext = createContext();

const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        getProducts().then(result => setProducts(result.products))
    }, [])
    return (
        <productsContext.Provider value={{ products, setProducts }}>
            {children}
        </productsContext.Provider>
    )
}

export default ProductsProvider;