const ListItem = ({ itemId, name, price, color, onItemClick, isActive }) => {
  const handleClick = () => {
    onItemClick(price, itemId)
  };
  return (
    <div
      className={`flexContainer ${isActive && 'active'}` }
      style={{ backgroundColor: color }}
      onClick={handleClick}
    >
      <span>{name}</span>
      <span>{price} €</span>
    </div>
  );
};
export default ListItem;
