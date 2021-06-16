const Item = ({name, diameter, population}) => {
    return (
        <div>
            <h3>{name}</h3>
            <h4>{diameter}</h4>
            <p>{population}</p>
        </div>
    )
}


export default Item;