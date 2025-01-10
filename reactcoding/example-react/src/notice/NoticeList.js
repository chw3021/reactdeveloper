
import Notice from './Notice';
import styles from './Notice.module.css';

const NoticeList = ({notices ,handleNoticeClick}) => {
    return (
        <div className={styles.noticeList}>
            {notices.map((notice, index) => (
                <Notice key={index} index={index} notice={notice} handleNoticeClick={handleNoticeClick} />
            ))}
        </div>
    );
}

export default NoticeList;