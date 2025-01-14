import './App.css';
import emotion1 from './img/emotion1.png';
import emotion2 from './img/emotion2.png';
import emotion3 from './img/emotion3.png';
import emotion4 from './img/emotion4.png';
import emotion5 from './img/emotion5.png';
import { Routes,Route,Link } from 'react-router-dom';
import Home from './pages/Home';
import New from './pages/New';
import Diary from './pages/Diary';
import Edit from './pages/Edit';

      {/* <img src={emotion1} alt="완전좋음"/>
      <img src={emotion2} alt="좋음"/>
      <img src={emotion3} alt="그럭저럭"/>
      <img src={emotion4} alt="나쁨"/>
      <img src={emotion5} alt="끔찍함"/> */}


function App() {
  return (
    <div className="App">
    <div>
      <Link to={"/"}>Home</Link>
      <Link to={"/new"}>New</Link>
      <Link to={"/diary"}>Diary</Link>
      <Link to={"/edit"}>Edit</Link>
    </div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<New />} />
      <Route path="/diary/:id" element={<Diary />} />
      <Route path="/edit" element={<Edit />} />
    </Routes>
    </div>
  );
}

export default App;
