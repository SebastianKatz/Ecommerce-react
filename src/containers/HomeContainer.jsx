import { useContext } from "react"
import { EcommerceContext } from "../context/EcommerceContext"

export const HomeContainer = () => {
    const {carrito} = useContext(EcommerceContext)
    return <h1>Hola! Tenes tantos productos en tu carrito: {carrito.length} </h1>
}