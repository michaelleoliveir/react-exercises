import { useState } from "react"

export const usePost = (url, fetchData) => {

    const [errorPost, setErrorPost] = useState("");

    const httpConfig = async (newData, method) => {
        if(method === "POST") {
            try {
                const resp = await fetch(url, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(newData)
                });

                if(!resp.ok) {
                    setErrorPost("Erro")
                }

                fetchData();
            } catch (error) {
                setErrorPost("Não foi possível cadastrar itens no momento")
            }
        }
    };

    return {httpConfig}
}