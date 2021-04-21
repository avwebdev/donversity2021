import React, { useContext, useState } from "react";
import styles from "./ClubsPage.module.css";
import { DataContext } from "../../misc/DataContext";
import { ContentSections, Club } from "../../types";
import { Link } from "react-router-dom";
import { analytics } from "../../Store";
import { getClubMedia } from "../../utils/funcs";
import { Helmet } from "react-helmet";

function ClubDiv(club: Club) {
  const [hovering, setHovering] = useState(false);

  return (
    <Link to={`/club-fair/${club.id}`} className="test">
      <div
        className={styles.club}
        onMouseOver={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        <p className={styles.mobileClubName}>{club.name}</p>
        <div className={`${styles.overlay} ${hovering && styles.overlayShow}`}>
          <h4
            className={`${styles.clubName} ${hovering && styles.clubNameShow}`}
          >
            {club.name}
          </h4>
        </div>
        <img
          src={getClubMedia(club.image)}
          alt={club.name}
          className={styles.clubImage}
        />
      </div>
    </Link>
  );
}

export default function ClubsPage() {
  analytics?.logEvent("page_view", {
    page_title: "Club Fair",
    page_location: "/club-fair",
  });

  const data = useContext(DataContext) as ContentSections;

  return (
    <>
      <Helmet>
        <title>Club Fair | Donversity</title>
      </Helmet>
      <div id={styles.top}>
        <h1 className={styles.heading}>Club Fair!</h1>
        <h5 id={styles.description}>
          A huge source of diversity on our campus comes from our clubs. From
          dance clubs such as Bollywood and Bhangra, to tech clubs such as
          Amador UAVs, we have it all! Celebrate Donversity by checking out some
          of these clubs.
        </h5>
      </div>
      <div className={styles.clubs}>
        {data.clubs.map((club, i) => (
          <ClubDiv key={i} {...club} />
        ))}
      </div>
    </>
  );
}
