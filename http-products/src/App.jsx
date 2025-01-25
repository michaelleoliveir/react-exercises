import { useState } from 'react'
import { useFetch } from './hooks/useFetch'

import './App.css'

import AddItem from './components/AddItem'
import ProductItems from './components/ProductItems'

function App() {

  const url = "http://localhost:3000/products";
  const { items } = useFetch(url);
  const [products, setProducts] = useState(items);

  const handleAddItem = (newItem) => {
    setProducts((prevProducts) => [...prevProducts, newItem])
  }

  return (
    <div>
      <h1>Produtos Cadastrados</h1>
      <div className="grid">
        {items && items.map((item) => (
        <ProductItems name={item.name} price={item.price} key={item.id} />
      ))}
      </div>

      <AddItem onAddItem={handleAddItem}/>
    </div>
  )
}

export default App
