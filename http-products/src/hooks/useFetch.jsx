import { useEffect, useState } from "react"

export const useFetch = (url) => {
    // criando as variáveis
    const [items, setItems] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        
        const fetchData = async () => {
            try {
                const res = await fetch(url);
                const data = await res.json();

                setItems(data)
            } catch (error) {
                setError("Não foi possível recuperar os dados no momento! Tente novamente mais tarde.")
            }
        }

        fetchData();

    }, [url]);

    return {items}
}