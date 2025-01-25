import { useEffect, useState, useCallback } from "react"

export const useFetch = (url) => {
    // criando as variáveis
    const [items, setItems] = useState([]);
    const [error, setError] = useState("");

    // fazendo o fetch
    const fetchData = useCallback(async () => {
        try {
            const res = await fetch(url);

            if(!res.ok) {
                setError("Não foi possível obter dados")
            }
            
            const data = await res.json();
            setItems(data)
        } catch (error) {
            setError("Não foi possível recuperar os dados no momento! Tente novamente mais tarde.")
        }
    }, [url])

    // agora posso usar o fetchData() sempre que atualizar os dados
    useEffect(() => {
        fetchData();
    }, [fetchData])


    return { items, error, fetchData }
}