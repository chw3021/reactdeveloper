import logo from './logo.svg';
import './App.css';
import Viewer from './component/Viewer';
import Controller from './component/Controller';
import { useEffect, useState, useRef } from 'react';
import Even from './component/Even';

function App() {

  const [count, setCount] = useState(0);
  const [text, setText] = useState("");


  const handleSetCount = (value) => {
    setCount(count + value);
  }

  const handleSetText = (e) => { 
    setText(e.target.value);
  }

  const didMountRef = useRef(false);

  useEffect(() => {
    if(!didMountRef.current) {
      didMountRef.current = true;
      return;
    }
    else{
      console.log("componentDidUpdate");
    }
    return () => {
      console.log("componentWillUnmount");
    }
  });

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input type="text" value={text} onChange={handleSetText}/>
        <p>{text}</p>
      </section>
      <section>
        <Viewer count={count}/>
        {count % 2 === 0 && <Even />}
      </section>
      <section>
        <Controller handleSetCount={handleSetCount}/>
      </section>
    </div>
  );
}

export default App;
