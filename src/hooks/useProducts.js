import { useEffect, useState } from "react"

const useProduts = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    // return nessesary things
    return [products];
}
export default useProduts;