import styles from "./HomePage.module.css";

export default function Highlight() {
    return (
        <div className={styles.highlight}>
            <img src="https://www.brownweinraub.com/wp-content/uploads/2017/09/placeholder.jpg" alt="placeholder" />
            <h4>Highlight 1</h4>
            <p>This is a lorem ipsum statement. This is a lorem ipsum statement. This is a lorem ipsum statement. This is a lorem ipsum statement. Go Dons!</p>
        </div>
    )
}