import { useState } from "react";
import Item from "./Item"; // Add this line to import the Item component

const ItemList = ({ items}) => {
    return (
        <ul>
            {items.map((item) => (
                <Item item={item} key={item.name} />
            ))}
        </ul>
    );
};

export default ItemList;