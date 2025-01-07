import React from 'react';

const Body = () => {
    const language = ['React', 'JavaScript', 'Java', 'Servlet', 'SQL'];
    return (
        <>
            <h1>우리가 배운 프로그래밍</h1>
            <ul style={
                { 
                    listStyleType: 'none',
                    color: 'pink',
                }
            }>
                {language.map((lang, index) => (
                    <li key={index}>{lang}</li>
                ))}
            </ul>
        </>
    );
};

export default Body;