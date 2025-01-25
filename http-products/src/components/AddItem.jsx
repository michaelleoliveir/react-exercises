import { usePost } from "../hooks/usePost";

import { useState } from "react"

import "./AddItem.css"

const AddItem = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const newItem = {
            name,
            price
        };

        usePost(newItem, "POST");

        setName("");
        setPrice("")
    }  

    return (
        <div>
            <form className="add" onSubmit={handleSubmit}>
                <label>
                    Nome:
                    <input 
                        type="text" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)}
                        name="nome"
                        autoComplete="off"
                    />
                </label>

                <label>
                    Preço:
                    <input 
                        type="number" 
                        value={price} 
                        onChange={(e) => setPrice(e.target.value)}
                        name="preco"
                        autoComplete="off"
                    />
                </label>

                <input type="submit" />
            </form>
        </div>
    )
}

export default AddItem