import { RiDeleteBin6Line  } from "@remixicon/react"

import "./ProductItems.css"

const ProductItems = ({ name, price, onDelete, id }) => {
    return (
        <div className="item">
            <p>{name}</p>
            <p>R${price}</p>
            <RiDeleteBin6Line style={{paddingTop: "15px", color: "red", cursor: "pointer"}} onClick={() => onDelete(id)} />
        </div>
    )
}

export default ProductItems