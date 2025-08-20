const ListItem = ({cost, setCost, name, price, color}) => {
    const handleClick = () => {
        color ?
        setCost(cost + price) :
        setCost(price)
    }
    return (
        <div className={`flexContainer ${color}`} onClick={handleClick}>
            <span>{name}</span> : 
            <span>{price} €</span>
        </div>
    )
}
export default ListItem