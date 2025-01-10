import { useMemo } from "react";

const ItemTotal = ({ items }) => {
    const calTotalPrice = (items) => {
        return items.reduce(function(sum,item){
            return sum + item.price * item.quantity;
        }, 0);
    };

    const totalPrice = useMemo(() => calTotalPrice(items), [items]);
    return (
        <p>합계: {totalPrice} 원</p>
    );
}

export default ItemTotal;