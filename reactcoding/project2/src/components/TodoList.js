import React from 'react';
import './TodoList.css';
import { useState } from "react";
import TodoItem from './TodoItem';

const TodoList = ({items, onToggle, onDelete}) => {

    const [search, setSearch] = useState("");

    const onChangeSearch = (e) => {
      setSearch(e.target.value);
    };
  
  
    const getSearchResult = () => {
      return search === ""
        ? items
        : items.filter((it) =>
            it.content.toLowerCase().includes(search.toLowerCase())
          );
    };

    return (
        <div className='TodoList'>
            <h4>할 일 목록 💣💣</h4>
            <input 
            value={search}
            onChange={onChangeSearch}
            className='search_holder' 
            placeholder="검색어를 입력하세요" />
            <div className="list_wrapper">
                {getSearchResult().map((item) => (
                    <TodoItem key={item.id} item={item} onToggle={onToggle} onDelete={onDelete}/>
                ))}
            </div>
        </div>
    )
}

export default TodoList;