import Item from "./Item";

const ItemList = ({props}) => {
    return (
        props.map((user, i) => {
            return (
                <Item key={props[i].url} name={props[i].name} diameter={props[i].diameter} population={props[i].population} />
            )
            
        })
    )
}

export default ItemList;