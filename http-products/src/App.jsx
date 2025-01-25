// importando os hooks que foram utilizados
import { useFetch } from './hooks/useFetch'
import { usePost } from './hooks/usePost'
import { useDelete } from './hooks/useDelete'

import './App.css'

// importando os componentes da página
import AddItem from './components/AddItem'
import ProductItems from './components/ProductItems'

function App() {

  const url = "http://localhost:3000/products";

  const { items, fetchData } = useFetch(url);
  const { httpConfig } = usePost(url, fetchData);
  const { deleteItem } = useDelete(url, fetchData)


  const handleDelete = async (id) => {
    await deleteItem(id);
  }

  return (
    <div>
      <h1>Produtos Cadastrados</h1>
      <div className="grid">
        {items && items.map((item) => (
        <ProductItems 
          name={item.name} 
          price={item.price} 
          key={item.id}
          id={item.id}
          onDelete={handleDelete} />
      ))}
      </div>

      <AddItem httpConfig={httpConfig}/>
    </div>
  )
}

export default App
