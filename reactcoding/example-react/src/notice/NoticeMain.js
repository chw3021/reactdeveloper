import React, { useState } from 'react';
import NoticeForm from "./NoticeForm";
import styles from './Notice.module.css';
import NoticeModal from './NoticeModal';
import NoticeList from './NoticeList';

const NoticeMain = () => {

    const noticeDataArray = [
        {
            title: '2023년 추석 연휴 휴무 안내',
            content: '안녕하세요, 고객 여러분. 2023년 추석 연휴 기간 동안 저희 회사는 9월 28일부터 10월 1일까지 휴무입니다. 이 기간 동안 고객 지원 서비스가 제공되지 않으니 양해 부탁드립니다. 감사합니다.',
            date: '2023-09-20'
        },
        {
            title: '신제품 출시 안내',
            content: '안녕하세요, 고객 여러분. 저희 회사는 새로운 스마트폰 모델인 XYZ Pro를 2023년 10월 15일에 출시할 예정입니다. 많은 관심과 성원 부탁드립니다. 감사합니다.',
            date: '2023-09-25'
        },
        {
            title: '정기 점검 안내',
            content: '안녕하세요, 고객 여러분. 저희 서비스의 정기 점검이 2023년 10월 5일 오전 2시부터 6시까지 진행될 예정입니다. 점검 시간 동안 서비스 이용이 제한될 수 있으니 양해 부탁드립니다. 감사합니다.',
            date: '2023-09-30'
        },
        {
            title: '고객 만족도 조사 참여 안내',
            content: '안녕하세요, 고객 여러분. 저희 회사는 고객 만족도 조사를 실시하고 있습니다. 설문에 참여해주신 고객님께는 추첨을 통해 소정의 상품을 드립니다. 많은 참여 부탁드립니다. 감사합니다.',
            date: '2023-10-01'
        }

    ]

    const [form, setForm] = useState({
        title: '',
        content: '',
        date: ''
    });
    
    const { title, content, date } = form;

    const [notices, setNotices] = useState(noticeDataArray);
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
        <div>

            <h1 className={styles.title}>공지사항</h1>
            <NoticeForm form={form} handleOnChange={handleOnChange} onKeyPress={onKeyPress} handleOnClick={handleOnClick} />
            <NoticeList notices={notices} handleNoticeClick={handleNoticeClick} />
            <NoticeModal isModalOpen={isModalOpen} selectedNotice={selectedNotice} closeModal={closeModal} />
        </div>
    );
}

export default NoticeMain;