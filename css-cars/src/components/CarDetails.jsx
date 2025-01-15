import style from './CarDetails.module.css'

const CarDetails = ({ marca, tipo, ano, disp }) => {
    return (
        <div>
            <div className={style.view}>
                <h2 className={style.heading}>{tipo}</h2>
                <h4>- {marca} -</h4>
                <p>{ano}</p>
                <p className={disp ? style.statusTrue : style.statusFalse}>Status: {disp ? 
                    ("Dispoível para compra!")
                :   ("Produto indisponível")
                } </p>
                
            </div>
        </div>
    )
}

export default CarDetails