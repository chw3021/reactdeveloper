const Item = ({ item }) => {
    return (
        <li>
            {item.name} - {item.price} X {item.quantity} = {item.price * item.quantity} 원
        </li>
    );
}

export default Item;