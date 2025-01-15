import './App.css'

import CarDetails from './components/CarDetails'

function App() {

  const cars = [
    {id: 1, marca: "Toyota", tipo: "Yaris", ano: 2024, disponivel: true},
    {id: 2, marca: "Volkswagen", tipo: "Gol", ano: 2007, disponivel: false},
    {id: 3, marca: "BYD", tipo: "Jeep", ano: 2025, disponivel: false},
    {id: 4, marca: "Fiat", tipo: "Siena", ano: 2015, disponivel: true},
  ]

  return (
    <div>
      <h1 id='heading'>Venda de Carros</h1>

      {cars.map((car) => (
        <CarDetails key={car.id} marca={car.marca} tipo={car.tipo} ano={car.ano} disp={car.disponivel}/>
      ))}
    </div>
  )
}

export default App
