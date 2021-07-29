import { createContext, useState } from "react";
// creo el contexto
export const EcommerceContext = createContext()
// creo el componente que va a retornar el contexto
export const EcommerceProvider = ({children}) => {
    const [products, setProducts] = useState([])
    const [carrito, setCarrito] = useState([])

    async function fetchData(searchQuery) {
        const data = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${searchQuery}`);
        const response = await data.json();
        setProducts(response.results);
    }
    
    return <EcommerceContext.Provider value={{products, carrito, setCarrito, fetchData, setProducts}}>
{/* Aca van todos los componentes hijos que van a ser consumidores del proveedor */}
        {children}
    </EcommerceContext.Provider>
}
