import styles from './Notice.module.css';

const Notice = ({notice, index, handleNoticeClick }) => {
    return (
        <div index={index} className={styles.noticeItem} onClick={() => handleNoticeClick(notice)}>
            <span className={styles.noticeIndex}>{index + 1}</span>
            <span className={styles.noticeTitle}>{notice.title}</span>
            <span className={styles.noticeDate}>{notice.date}</span>
        </div>
    );
}

export default Notice;