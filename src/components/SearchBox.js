const SearchBox = ({searchChange, kk, uu}) => {
        return (
            <input type='search' placeholder={`Search ${kk}`} onChange={searchChange} value={uu}></input>
        ) 
}

export default SearchBox;