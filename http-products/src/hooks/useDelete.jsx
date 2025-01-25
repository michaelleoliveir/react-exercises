import { useState } from "react";

export const useDelete = (url, fetchData) => {
    const [errorDelete, setErrorDelete] = useState("")

    const deleteItem = async (id) => {
        try {
            const resp = await fetch(`${url}/${id}`, {
                method: "DELETE"
            });

            if(!resp.ok) {
                setErrorDelete("Não foi possível deletar item")
            }

            fetchData();
        } catch (error) {
            setErrorDelete("Não foi possível deletar o erro! Tente novamente mais tarde.")
        }
    };

    return { deleteItem }
}