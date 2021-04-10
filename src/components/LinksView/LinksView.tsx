import styles from "./LinksView.module.css";

export default function LinksView({
  title,
  description,
  hook,
  youtubeUrl = false,
}: any) {
  return (
    <section>
      <div className={styles.hook}>
        {hook}
        <div className={`${styles.cards} card`}>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>

            <p className="card-text">{description}</p>
            <a
              href={youtubeUrl}
              target={"_blank"}
              className="card-link"
              rel="noreferrer"
            >
              link
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
