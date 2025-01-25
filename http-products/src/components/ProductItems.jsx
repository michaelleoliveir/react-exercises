import "./ProductItems.css"

const ProductItems = ({ name, price }) => {
    return (
        <div className="item">
            <p>{name}</p>
            <p>R${price}</p>
        </div>
    )
}

export default ProductItems