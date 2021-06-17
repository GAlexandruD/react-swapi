import Item from "./Item";

const ItemList = ({props, ak}) => {
    if (ak !== 'films') {
        return (
            props.map((user, i) => {
                return (
                    <Item key={props[i].url} name={props[i].name} />
                )
                
            })
        )       
    } else {
        return (
            props.map((user, i) => {
                return (
                    <Item key={props[i].url} name={props[i].title} />
                )
                
            })
        )
    }
    
}

export default ItemList;