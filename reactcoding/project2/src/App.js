import './App.css';
import { useReducer, useRef } from "react";
import Header from'./components/Header'
import TodoEditer from './components/TodoEditor'
import TodoList from './components/TodoList';
import TestComponent from './components/TestComponent';


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

function reducer(state,action){
  switch (action.type) {
    case "CREATE":{
      return [action.newItem, ...state]
    }
    case "UPDATE":{
      return state.map((it)=>
        it.id === action.targetID
        ?{
          ...it,
          isDone: !it.isDone,
        }
        :it
      );
    }
    case "DELETE":{
      return state.filter((it)=> it.id !== action.targetID);
    }
  
    default:
      return state;
  }
}


function App() {
  const [todo, dispatch] = useReducer(reducer, mockTodo);

  const idRef = useRef(3);

  const onCreate = (content) => {

    dispatch({
      type: "CREATE",
      newItem:{

        id: idRef.current,
  
        content,
  
        isDone: false,
  
        createdDate: new Date().getTime(),
      }
    })

    idRef.current += 1;

  };

  const onUpdate = (targetID) =>{
    dispatch({
      type:"UPDATE",
      targetID,
    });
  };

  const onDelete = (targetID) => {
    dispatch({
      type:"DELETE",
      targetID,
    });
  };
  

  return (
    <div className="App">
      <Header />
      <TodoEditer onCreate={onCreate} />
      <TodoList items={todo} onToggle={onUpdate} onDelete={onDelete}/>
    </div>
  );
}

export default App;
