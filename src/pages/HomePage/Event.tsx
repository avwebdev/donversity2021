import styles from "./HomePage.module.css";

export default function Event({ highlight }: any) {
    if (highlight) return (
        <div className={highlight ? styles.highlight : styles.event}>
            <span>
                <img src="https://www.brownweinraub.com/wp-content/uploads/2017/09/placeholder.jpg" alt="placeholder" />
                <h4>Event 1</h4>
                <p>This is a lorem ipsum statement. This is a lorem ipsum statement. This is a lorem ipsum statement. This is a lorem ipsum statement. Go Dons!</p>
            </span>
        </div>
    );
    else return (
        <div className={highlight ? styles.highlight : styles.event}>
            <img src="https://www.brownweinraub.com/wp-content/uploads/2017/09/placeholder.jpg" alt="placeholder" />
            <span>
                <h4>Event 1</h4>
                <p>This is a lorem ipsum statement. This is a lorem ipsum statement. This is a lorem ipsum statement. This is a lorem ipsum statement. Go Dons!</p>
            </span>
        </div>
    )
}