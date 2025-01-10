import React, { useState, useEffect } from 'react';
import Say from './Say';
import EventPractice from './EventPractice';
import './Iframe.css';
import MyComponent from './MyComponent';
import Ref from './Ref';
import NoticeMain from '../../notice/NoticeMain';
import ItemMain from '../../product/ItemMain';
import Body from '../Body';

const Iframe = () => {

  const [isRendered, setIsRendered] = useState(true);
  const [currentPage, setCurrentPage] = useState('Body');
  
  const person = {
    name: '홍길동',
    age: 20,
    location: '서울',
    email: "javauser@a.com",
    favoriteNumber: 7,
    hobbyList: ['React', 'JavaScript', 'Java', 'Servlet', 'SQL']
  };

  const renderToggle = () => {
    setIsRendered(!isRendered);
};

  const renderPage = () => {
    switch (currentPage) {
      case 'Body':
        return <Body />;
      case 'say':
        return <Say />;
      case 'eventPractice':
        return <EventPractice />;
      case 'myComponent':
        return <MyComponent {...person} >노력은 절대 배신나지 않는다</MyComponent>;
      case 'ref':
        return <Ref />;
      case 'notice':
        return <NoticeMain />;
      case 'item':
        return <ItemMain />;
      default:
        return <Say />;
    }
  };

  return (
    <div>
      <button onClick={renderToggle}>Toggle Iframe</button>
      {isRendered && (
          <div className="iframe-container">
              <div className="toggle-buttons">
                <button onClick={() => setCurrentPage('Body')}>Body</button>
                <button onClick={() => setCurrentPage('say')}>Say</button>
                <button onClick={() => setCurrentPage('eventPractice')}>Event Practice</button>
                <button onClick={() => setCurrentPage('myComponent')}>My Component</button>
                <button onClick={() => setCurrentPage('ref')}>Ref</button>
                <button onClick={() => setCurrentPage('notice')}>NoticeMain</button>
                <button onClick={() => setCurrentPage('item')}>ItemList</button>
              </div>
              <div className="content-frame">
                {renderPage()}
              </div>
          </div>
      )}
    </div>
  );

};

export default Iframe;