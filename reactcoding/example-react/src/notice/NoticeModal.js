import styles from './Notice.module.css';

const render = ({ title, content, date }) => {
    return (
        <div className={styles.noticeContainer}>
            <table className={styles.noticeTable}>
                <tbody>
                    <tr>
                        <th>제목</th>
                        <td>{title}</td>
                    </tr>
                    <tr>
                        <th>내용</th>
                        <td>{content}</td>
                    </tr>
                    <tr>
                        <th>날짜</th>
                        <td>{date}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

const NoticeModal = ({ isModalOpen, selectedNotice, closeModal }) => {
    
    return (
        <>
            {isModalOpen && selectedNotice && (
                <div>
                    <div className={styles.overlay} onClick={closeModal}></div>
                    <div className={styles.modal}>
                        {render(selectedNotice)}
                        <button onClick={closeModal} className={styles.submitButton}>닫기</button>
                    </div>
                </div>
            )}
        </>
    );
};

export default NoticeModal;