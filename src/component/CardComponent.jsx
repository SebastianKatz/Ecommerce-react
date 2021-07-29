const CardComponent = ({product:{title, thumbnail, price}, AgregarAlCarrito}) => {
    return (
        <div>
            <img className="card-img-top" src={thumbnail} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">${price}</p>
                <button className="btn btn-primary" onClick={(event) => {AgregarAlCarrito(event, title)}}>Agregar al carrito</button>
    
            </div>
        </div>
    )
}
export default CardComponent;
