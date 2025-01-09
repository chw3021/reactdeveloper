import React from 'react';
import styles from './MyComponent.module.css';

const MyComponent = ({ name, age, email, favoriteNumber, hobbyList, children }) => {
    return (
        <table className={styles.body}>
            <tbody>
                <tr>
                    <th>이름</th>
                    <td>{name}</td>
                </tr>
                <tr>
                    <th>나이</th>
                    <td>{age}</td>
                </tr>
                <tr>
                    <th>이메일</th>
                    <td>{email}</td>
                </tr>
                <tr>
                    <th>좋아하는 숫자</th>
                    <td>{favoriteNumber}</td>
                </tr>
                <tr>
                    <th>좋아하는 인용구</th>
                    <td>"{children}"</td>
                </tr>
                <tr>
                    <th>취미</th>
                    <td>
                        <ul>
                            {hobbyList.map((hobby, index) => (
                                <li key={index}>{hobby}</li>
                            ))}
                        </ul>
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export default MyComponent;