import { useState } from "react";
import styles from './NoticeForm.module.css';

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

const NoticeForm = () => {
    const [form, setForm] = useState({
        title: '',
        content: '',
        date: ''
    });
    const [notices, setNotices] = useState([]);
    const [selectedNotice, setSelectedNotice] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOnChange = e => {
        const nextForm = {
            ...form,
            [e.target.name]: e.target.value
        };
        setForm(nextForm);
    };

    const onKeyPress = e => {
        if (e.key === 'Enter') {
            handleOnClick();
        }
    };

    const handleOnClick = () => {
        const { title, content, date } = form;
        if (title.trim() === "") {
            alert("제목을 입력해주세요.");
            return;
        }
        if (content.trim() === "") {
            alert("내용을 입력해주세요.");
            return;
        }
        const newNotice = { title, content, date };
        setNotices([...notices, newNotice]);
        setForm({ title: '', content: '', date: '' });
    };

    const handleNoticeClick = (notice) => {
        setSelectedNotice(notice);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedNotice(null);
    };

    return (
        <div className={styles.noticeForm}>

            <h1 className={styles.title}>공지사항</h1>

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
            <div className={styles.noticeList}>
                {notices.map((notice, index) => (
                    <div key={index} className={styles.noticeItem} onClick={() => handleNoticeClick(notice)}>
                        <span className={styles.noticeIndex}>{index + 1}</span>
                        <span className={styles.noticeTitle}>{notice.title}</span>
                        <span className={styles.noticeDate}>{notice.date}</span>
                    </div>
                ))}
            </div>
            {isModalOpen && selectedNotice && (
                <>
                    <div className={styles.overlay} onClick={closeModal}></div>
                    <div className={styles.modal}>
                        {render(selectedNotice)}
                        <button onClick={closeModal} className={styles.submitButton}>닫기</button>
                    </div>
                </>
            )}
        </div>
    );
};

export default NoticeForm;