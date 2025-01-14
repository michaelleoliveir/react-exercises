import './App.css'
import UserDetails from './components/UserDetails'

function App() {

  const users = [
    {id: 1, nome: "Michaelle", idade: 21, profissao: "Desenvolvedora"},
    {id: 2, nome: "Thiago", idade: 20, profissao: "Desenvolvedor Júnior"},
    {id: 3, nome: "Emanuelle", idade: 21, profissao: "Enfermeira"},
    {id: 4, nome: "Matheus", idade: 34, profissao: "Professor"},{id: 5, nome: "Luciano", idade: 12, profissao: "Estudante"},{id: 6, nome: "Maria", idade: 5, profissao: "Bebê"},
  ]

  return (
    <>
      <h1>Usuários Cadastrados</h1>
      {users.map((user) => (
        <UserDetails key={user.id} nome={user.nome} idade={user.idade} profissao={user.profissao}/>
      ))}
    </>
  )
}

export default App
