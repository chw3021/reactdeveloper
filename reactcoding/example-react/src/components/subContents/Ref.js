import React, { useState, useRef } from 'react';


const Ref = () => {


    const [text, setText] = useState("");
    const textRef = useRef();
    const handleOnChange = (e) => {
        setText(e.target.value);
    }

    const handleOnClick = () => {
        if(text.trim() === ""){
            alert("텍스트를 입력해주세요.");
            textRef.current.value = "";
            textRef.current.focus();
        }
        else if(text.length < 5){
            textRef.current.focus();
        }
        else{
            alert(text);
            textRef.current.value = "";
        }
    };

    return (
        <div>
            <div>
                <input type="text" ref={textRef} onChange={handleOnChange} />
                <button onClick={handleOnClick}>확인</button> 
            </div>
        </div>
    );

};

export default Ref;