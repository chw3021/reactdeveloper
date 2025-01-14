import { useRef, useState } from 'react';
import './TodoEditor.css'

const TodoEditor = ({onCreate}) => {

    const [content, setContent] = useState("");
    const inputRef = useRef();
    const onChangeContent = (e) =>{
        setContent(e.target.value);
    };

    const onSubmit = () => {

        if (!content) {
    
          inputRef.current.focus();
    
          alert("할 일을 입력하세요!");
    
          return;
    
        }
    
        onCreate(content);
    
        setContent("");
    
      };
    
      const onKeyDown = (e) => {
    
        if (e.keyCode === 13) {
    
          onSubmit();
    
        }
    
      };


    return (
        <div className='TodoEditor'>
            <h4>새로운 할 일 작성하기🔪</h4>
            <div className='editor_wrapper'>
                <input 
                    ref={inputRef}
                    value={content}
                    onKeyDown={onKeyDown}
                    onChange={onChangeContent} 
                    placeholder="새로운 할 일..." />
                <button onClick={onSubmit}>추가</button>
            </div>
        </div>
    )
}

export default TodoEditor;