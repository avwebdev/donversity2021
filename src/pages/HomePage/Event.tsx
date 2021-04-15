import { ContentPage } from "../../types";
import styles from "./HomePage.module.css";

export default function Event({ page, highlight }: { page: ContentPage, highlight: boolean }) {
    if (highlight) return (
        <div className={highlight ? styles.highlight : styles.event}>
            <span>
                <span className={styles.imageContainer}>
                    <img src={page.imageUrl} alt={`Page ${page.title}`} />
                </span>
                <h4>{page.title}</h4>
                <p>{page.description}</p>
            </span>
        </div>
    );
    else return (
        <div className={highlight ? styles.highlight : styles.event}>
            <img src={page.imageUrl} alt={`Page ${page.title}`} />
            <span>
                <h4>{page.title}</h4>
                <p>{page.description}</p>
            </span>
        </div>
    )
}