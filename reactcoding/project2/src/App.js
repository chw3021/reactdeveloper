import './App.css';
import { useState, useRef } from "react";
import Header from'./components/Header'
import TodoEditer from './components/TodoEditor'
import TodoList from './components/TodoList';


const mockTodo = [

  {

    id: 0,

    isDone: false,

    content: "React 공부하기",

    createdDate: new Date().getTime(),

  },

  {

    id: 1,

    isDone: false,

    content: "빨래 널기",

    createdDate: new Date().getTime(),

  },

  {

    id: 2,

    isDone: false,

    content: "노래 연습하기",

    createdDate: new Date().getTime(),

  },

];


function App() {
  const [todo, setTodo] = useState(mockTodo);

  const idRef = useRef(3);

  const onCreate = (content) => {

    const newItem = {

      id: idRef.current,

      content,

      isDone: false,

      createdDate: new Date().getTime(),

    };

    setTodo([newItem, ...todo]);

    idRef.current += 1;

  };

  const onDelete = (id) => {
    setTodo(prevTodo => prevTodo.filter(item => item.id !== id));
  };
  
  const handleToggle = (id) => {
    const updatedItems = todo.map(item =>
      item.id === id ? { ...item, isDone: !item.isDone } : item
    );
    setTodo(updatedItems);
  };

  return (
    <div className="App">
      <Header />
      <TodoEditer onCreate={onCreate} />
      <TodoList items={todo} onToggle={handleToggle} onDelete={onDelete}/>
    </div>
  );
}

export default App;
