import React from 'react';
import { useState } from 'react';

// const Body = () => {
//     const language = ['React', 'JavaScript', 'Java', 'Servlet', 'SQL'];
//     return (
//         <>
//             <h1>우리가 배운 프로그래밍</h1>
//             <ul style={
//                 { 
//                     listStyleType: 'none',
//                     color: 'pink',
//                 }
//             }>
//                 {language.map((lang, index) => (
//                     <li key={index}>{lang}</li>
//                 ))}
//             </ul>
//         </>
//     );
// };

// const Body = ({name, location, favorList = []}) => {
//     console.log(name, location, favorList);
//     return (
//         <div className='body'>
//             <h1>우리가 배운 프로그래밍</h1>
//             <ul style={
//                 { 
//                     listStyleType: 'none',
//                     color: 'pink',
//                 }
//             }>
//                 {favorList.map((lang, index) => (
//                     <li key={index}>{lang}</li>
//                 ))}
//             </ul>
//         </div>
//     )
// }

/*
const Body = () =>{
    function handleOnClick(e) {
        if(e.target.name === '1st') {
            alert('첫 번째 버튼이 클릭되었습니다.');
        } else if(e.target.name === '2nd') {
            alert('두 번째 버튼이 클릭되었습니다.');
        }
    }
    let [count, setCount] = useState(0);
    const onIncrease = () => {
        setCount(count + 1);
    }
    let [text, setText] = useState("");
    const handleOnChange = (e) => {
        console.log(e.target.value);
        setText(e.target.value);
    }
    let [date, setDate] = useState("");
    const handleDateChange = (e) => {
        setDate(e.target.value);
    }

    let [option, setOption] = useState("");
    const handleOptionChange = (e) => {
        setOption(e.target.value);
    }


    return(
        <div>
            <h2>카운트: {count}</h2>
            <button onClick={onIncrease}>+</button>
            <br />
            <input type='text' onChange={handleOnChange} />
            <div>{text}</div>

            <input type='date' value={date} onChange={handleDateChange} />
            <div>{date}</div>

            <select value={option} onChange={handleOptionChange}>
                <option key={1} value='react'>React</option>
                <option key={2} value='java'>Java</option>
                <option key={3} value='javascript'>JavaScript</option>
            </select>
            <div>{option}</div>
            <br />

            <button name='1st' onClick={handleOnClick}>클릭하세요</button>
            <button name='2nd' onClick={handleOnClick}>클릭하세요</button>
        </div>
    )
}*/

const Body = () => {   
    const [state, setState] = useState({
        name:"",
        gender:"",
        birth:"",
        bio:""
    });

    const handleOnChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    }
    
    const renderTable = () => {
        return (
            <div className='printData'>
                <h2>회원 정보</h2>
                <div className="table-container">
                    <table>
                        <tbody>
                            <tr>
                                <th>이름</th>
                                <td>{state.name}</td>
                            </tr>
                            <tr>
                                <th>성별</th>
                                <td>{state.gender}</td>
                            </tr>
                            <tr>
                                <th>생년월일</th>
                                <td>{state.birth}</td>
                            </tr>
                            <tr>
                                <th>소개</th>
                                <td>{state.bio}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
 

  return (

    <div className='body'>

      <div>

        <input name="name" value={state.name} onChange={handleOnChange} placeholder="이름" />

      </div>

      <div>

        <select name="gender" value={state.gender} onChange={handleOnChange}>

          <option key={""} hidden>성별</option>

          <option key={"남성"}>남성</option>

          <option key={"여성"}>여성</option>

        </select>

      </div>

      <div>

        <input name="birth" type="date" value={state.birth} onChange={handleOnChange} />

      </div>

      <div>

        <textarea name="bio" value={state.bio} onChange={handleOnChange} />

      </div>
      {renderTable()}

    </div>

  );
}

export default Body;