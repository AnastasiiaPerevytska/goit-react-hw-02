import styles from './Feedback.module.css';

export default function Feedback({ feedback, total, positivePercentage }) {
    return (
        <div className={styles.feedback}>
            <p>Good: {feedback.good}</p>
            <p>Neutral: {feedback.neutral}</p>
            <p>Bad: {feedback.bad}</p>
            <p>Total: {total}</p>
            <p>Positive: {positivePercentage}%</p>
        </div>
    );
}