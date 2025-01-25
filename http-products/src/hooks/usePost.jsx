import { useState } from "react"
import { useFetch } from "./useFetch";

export const usePost = (url) => {
    const [items, error] = useFetch(url)

    const [data, setData] = useState([]);
    const [method, setMethod] = useState("");
    const [config, setConfig] = useState(null);

    const httpConfig = async (data, method) => {
        if(method === "POST") {
            setConfig({
                method, 
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify(data)
            })
        }

        setMethod(method)
    };

    return {httpConfig}
}