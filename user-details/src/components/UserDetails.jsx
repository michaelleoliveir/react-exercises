const UserDetails = ({ nome, profissao, idade }) => {
    return (
        <div>
            <div className="card">
                <h2>{nome}</h2>
                <p><span>Idade:</span> {idade}</p>
                <p><span>Profissão:</span> {profissao}</p>

                {idade >= 18 ? (
                    <p>Apto a dirigir</p>
                ) : (
                    <p>Menor de idade</p>
                )}
            </div>
        </div>
    )
}

export default UserDetails