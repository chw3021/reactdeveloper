import React, { useState } from 'react';
import Say from './Say';
import EventPractice from './EventPractice';
import './Iframe.css';
import MyComponent from './MyComponent';
import Ref from './Ref';
import NoticeForm from '../../notice/NoticeForm';

const Iframe = () => {
    
  const [currentPage, setCurrentPage] = useState('say');

  const person = {
    name: '홍길동',
    age: 20,
    location: '서울',
    email: "javauser@a.com",
    favoriteNumber: 7,
    hobbyList: ['React', 'JavaScript', 'Java', 'Servlet', 'SQL']
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'say':
        return <Say />;
      case 'eventPractice':
        return <EventPractice />;
      case 'myComponent':
        return <MyComponent {...person} >노력은 절대 배신나지 않는다</MyComponent>;
      case 'ref':
        return <Ref />;
      case 'noticeForm':
        return <NoticeForm />;
      default:
        return <Say />;
    }
  };

  return (
    <div className="iframe-container">
      <div className="toggle-buttons">
        <button onClick={() => setCurrentPage('say')}>Say</button>
        <button onClick={() => setCurrentPage('eventPractice')}>Event Practice</button>
        <button onClick={() => setCurrentPage('myComponent')}>My Component</button>
        <button onClick={() => setCurrentPage('ref')}>Ref</button>
        <button onClick={() => setCurrentPage('noticeForm')}>NoticeForm</button>
      </div>
      <div className="content-frame">
        {renderPage()}
      </div>
    </div>
  );

};

export default Iframe;