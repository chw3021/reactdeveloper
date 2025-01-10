import React, { useState } from 'react';
import ItemList from './ItemList';
import Item from './Item';
import ItemTotal from './ItemTotal';
import ItemInput from './ItemInput';

const ItemMain = () => {
    const itemDataArray = [
        {
            name: "CPU",
            price: 310000,
            quantity: 1,
        },
        {
            name: "RAM",
            price: 80000,
            quantity: 2,
        },
        {
            name: "SSD",
            price: 120000,
            quantity: 1,
        },
    ];

    const [items, setItems] = useState(itemDataArray);

    const [form, setForm] = useState({
        name: "",
        price: 0,
        quantity: 0,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value,
        });
    };

    const onCreate = () => {
        setItems([...items, form]);
        alert("추가되었습니다.");
    };

    const onChangePrice = (name, price) => {
        setItems((items) =>
            items.map((item) =>
                item.name === name ? { ...item, price: price } : item
            )
        );
        
    };

    return (
        <>
            <ItemInput form={form} handleChange = {handleChange} onCreate = {onCreate} />
            <hr />
            <ItemList items={items} />
            <ItemTotal items={items} />
        </>
    );
};

export default ItemMain;