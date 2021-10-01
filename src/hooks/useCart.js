import { useEffect, useState } from "react";
import { getStoredCart } from "../utilities/fakedb";

const useCart = products => {
    const [cart, setCart] = useState([])
    useEffect(() => {
        if (products.length) {
            const savedCart = getStoredCart()
            const storeCard = []
            for (const key in savedCart) {
                const addedProduct = products.find(product => product.key === key);
                if (addedProduct) {
                    // set quantity 
                    const quantity = savedCart[key];
                    addedProduct.quantity = quantity
                    storeCard.push(addedProduct);
                }
            }
            setCart(storeCard);
        }
    }, [products])
    return [cart, setCart]
}
export default useCart;