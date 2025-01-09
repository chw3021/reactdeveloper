import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import Say from './components/subContents/Say';
import EventPractice from './components/subContents/EventPractice';
import Iframe from './components/subContents/Iframe';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className="App" style={{ backgroundColor: '#333', color: '#fff', minHeight: '100vh' }}>
//       <Header />
//       <Body />
//       <Footer />
//     </div>
//   );
// }

// class App extends Component {
//   render() {
//     const name = '리액트';
//     return (
//       <div className="App" style={{ backgroundColor: '#333', color: '#fff', minHeight: '100vh' }}>
//         <Header />
//         {name}
//         <Body />
//         <Footer />
//       </div>
//     );
//   }
// }

// const App = () => {
  
//   const person = {
//     name: '홍길동',
//     age: 20,
//     location: '서울',
//     email: "javauser@a.com",
//     favoriteNumber: 7,
//     hobbyList: ['React', 'JavaScript', 'Java', 'Servlet', 'SQL']
//   };

//   return (
//     <div className='App' style={{ backgroundColor: 'blueviolet', color: '#123', minHeight: '100vh' }}>
//       <Header />
//       <Body />
//       <MyComponent {...person} >노력은 절대 배신나지 않는다</MyComponent>
//       <Footer />
//     </div>
//   );
// }

const App = () => {
  

  return (
    <div className='App'>
      <Header />
      <Body />
      <Iframe />
      <Footer />
    </div>
  );
}

export default App;
