import React, { useContext, useState } from "react";
import styles from "./ClubsPage.module.css";
import { DataContext } from "../../misc/DataContext";
import { ContentSections, Club } from "../../types";

function ClubDiv(club: Club) {
  const [hovering, setHovering] = useState(false);

  return (
    <div
      className={styles.club}
      onMouseOver={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <div
        className={`${styles.overlay} ${hovering && styles.overlayShow}`}
      ></div>
      <img
        src={`/clubs/${club.image}`}
        alt={club.name}
        className={styles.clubImage}
      />
      <h5 className={`${styles.clubName} ${hovering && styles.clubNameShow}`}>
        {club.name}
      </h5>
    </div>
  );
}

export default function ClubsPage() {
  const data = useContext(DataContext) as ContentSections;

  return (
    <>
      <h1 className={styles.heading}>Club Fair!</h1>
      <div className={styles.clubs}>
        {data.clubs.map((club, i) => (
          <ClubDiv key={i} {...club} />
        ))}
      </div>
    </>
  );
}
