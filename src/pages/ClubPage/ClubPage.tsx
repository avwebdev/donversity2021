import React, { useContext } from "react";
import { Redirect, useParams } from "react-router-dom";
import { DataContext } from "../../misc/DataContext";
import { ContentSections } from "../../types";
import styles from "./ClubPage.module.css";

interface Params {
  club: string;
}

export default function ClubPage() {
  const data = useContext(DataContext) as ContentSections;
  const { club } = useParams<Params>();

  const clubInfo = data.clubs.find((c) => c.id === club);

  if (!clubInfo) return <Redirect to="/club-fair" />;

  return (
    <div className={styles.club}>
      <h1>{clubInfo.name}</h1>
      {clubInfo.description.split("\n").map((fragment, i) => (
        <p key={i} className={styles.clubDescription}>
          {fragment}
        </p>
      ))}
    </div>
  );
}
