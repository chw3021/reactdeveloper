import React from "react";

const ItemInput = ({ form, handleChange, onCreate }) => {
    
    const {name, price, quantity} = form;


    return (
        <form className="Add">
            <h1>상품입력</h1>
            <table>
                <tbody>
                    <tr>
                        <th>상품명</th>
                        <td>
                            <input
                                type="text"
                                name="name"
                                value={name}
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr>
                        <th>가격</th>
                        <td>
                            <input
                                type="text"
                                name="price"
                                value={price}
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr>
                        <th>수량</th>
                        <td>
                            <input
                                type="text"
                                name="quantity"
                                value={quantity}
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
            <div>
                <button type="button" onClick={onCreate}>
                    추가
                </button>
            </div>
        </form>
    );
};

export default ItemInput;

