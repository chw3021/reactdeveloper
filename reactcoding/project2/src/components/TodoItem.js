import './TodoItem.css';


const TodoItem = ({item, onToggle, onDelete}) => {
    const formattedDate = new Date(item.createdDate).toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    return (
  
      <div className="TodoItem">
  
        <div className="checkbox_col">
  
          <input type="checkbox" checked={item.isDone}
          onChange={() => onToggle(item.id)}/>
  
        </div>
  
        <div className={`title_col ${item.isDone ? 'done' : ''}`}>
            {item.content}
        </div>
  
        <div className="date_col">
  
        {formattedDate}
  
        </div>
  
        <div className="btn_col">
  
        <button onClick={() => onDelete(item.id)}>삭제</button>
  
        </div>
  
      </div>
  
    );
  
  };
  
   
  
  export default TodoItem;