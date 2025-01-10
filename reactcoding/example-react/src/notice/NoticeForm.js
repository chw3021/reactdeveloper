import styles from './Notice.module.css';

const NoticeForm = ({form,handleOnChange,onKeyPress, handleOnClick}) => {

    return (
        <div className={styles.noticeForm}>

            <div className={styles.inputContainer}>
                <input
                    name="title"
                    value={form.title}
                    onChange={handleOnChange}
                    onKeyPress={onKeyPress}
                    placeholder="제목"
                    className={styles.inputField}
                />
                <textarea
                    name="content"
                    value={form.content}
                    onChange={handleOnChange}
                    onKeyPress={onKeyPress}
                    placeholder="내용"
                    className={styles.textareaField}
                />
                <input
                    name="date"
                    type="date"
                    value={form.date}
                    onChange={handleOnChange}
                    onKeyPress={onKeyPress}
                    className={styles.inputField}
                />
                <button onClick={handleOnClick} className={styles.submitButton}>제출</button>
            </div>
            
        </div>
    );
};

export default NoticeForm;