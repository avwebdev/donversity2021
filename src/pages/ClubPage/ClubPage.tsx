import React, { useContext } from "react";
import { Redirect, useParams } from "react-router-dom";
import MediaView from "../../components/MediaView/MediaView";
import { DataContext } from "../../misc/DataContext";
import { ContentSections } from "../../types";
import styles from "./ClubPage.module.css";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import "react-alice-carousel/lib/scss/alice-carousel.scss";
import { Link } from "react-router-dom";

interface Params {
  club: string;
}

export default function ClubPage() {

  
 
  const data = useContext(DataContext) as ContentSections;
  const { club } = useParams<Params>();

  const clubInfo = data.clubs.find((c) => c.id === club);
  console.log(data.clubs);

 
  const style = {width:400, paddingRight:20};


  
    const items = [

      
      <div style={style}>
      <Link className="test" to={`/club-fair/${data.clubs[0].id}`}>
        <div className={`${styles.overlay} ${styles.overlayShow}`}>
          <h4
            className={`${styles.clubName} ${styles.clubNameShow}`}
          >
            {data.clubs[0].name}
          </h4>
        </div>
        <img
          src={`/clubs/${data.clubs[0].image}`}
          alt={data.clubs[0].name}
          className={styles.clubImage}/>
          </Link>
      </div>,
     
      <div style={style}>
      <Link to={`/club-fair/${data.clubs[1].id}`}>
      <div className={`${styles.overlay} ${styles.overlayShow}`}>
        <h4
          className={`${styles.clubName} ${styles.clubNameShow}`}
        >
          {data.clubs[1].name}
        </h4>
      </div>
      <img
        src={`/clubs/${data.clubs[1].image}`}
        alt={data.clubs[1].name}
        className={styles.clubImage}/>
        </Link>
    </div>,
   
    <div style={style}>
    <Link to={`/club-fair/${data.clubs[2].id}`}>
    <div className={`${styles.overlay} ${styles.overlayShow}`}>
      <h4
        className={`${styles.clubName} ${styles.clubNameShow}`}
      >
        {data.clubs[2].name}
      </h4>
    </div>
    <img
      src={`/clubs/${data.clubs[2].image}`}
      alt={data.clubs[2].name}
      className={styles.clubImage}/>
      </Link>
  </div>,
  
  <div style={style}>
 <Link to={`/club-fair/${data.clubs[3].id}`}>
  <div className={`${styles.overlay} ${styles.overlayShow}`}>
    <h4
      className={`${styles.clubName} ${styles.clubNameShow}`}
    >
      {data.clubs[3].name}
    </h4>
  </div>
  <img
    src={`/clubs/${data.clubs[3].image}`}
    alt={data.clubs[3].name}
    className={styles.clubImage}/>
    </Link>
</div>,
//************************************************** */

<div style={style}>
<Link to={`/club-fair/${data.clubs[4].id}`}>
  <div className={`${styles.overlay} ${styles.overlayShow}`}>
    <h4
      className={`${styles.clubName} ${styles.clubNameShow}`}
    >
      {data.clubs[4].name}
    </h4>
  </div>
  <img
    src={`/clubs/${data.clubs[4].image}`}
    alt={data.clubs[4].name}
    className={styles.clubImage}/>
    </Link>
</div>,
//************************************************** */

<div  style={style}>
<Link to={`/club-fair/${data.clubs[5].id}`}>
  <div className={`${styles.overlay} ${styles.overlayShow}`}>
    <h4
      className={`${styles.clubName} ${styles.clubNameShow}`}
    >
      {data.clubs[5].name}
    </h4>
  </div>
  <img
    src={`/clubs/${data.clubs[5].image}`}
    alt={data.clubs[5].name}
    className={styles.clubImage}/>
    </Link>
</div>,
//************************************************** */

<div  style={style}>
<Link to={`/club-fair/${data.clubs[6].id}`}>
  <div className={`${styles.overlay} ${styles.overlayShow}`}>
    <h4
      className={`${styles.clubName} ${styles.clubNameShow}`}
    >
      {data.clubs[6].name}
    </h4>
  </div>
  <img
    src={`/clubs/${data.clubs[6].image}`}
    alt={data.clubs[6].name}
    className={styles.clubImage}/>
    </Link>
</div>,
//************************************************** */

<div  style={style}>
<Link to={`/club-fair/${data.clubs[7].id}`}>
  <div className={`${styles.overlay} ${styles.overlayShow}`}>
    <h4
      className={`${styles.clubName} ${styles.clubNameShow}`}
    >
      {data.clubs[7].name}
    </h4>
  </div>
  <img
    src={`/clubs/${data.clubs[7].image}`}
    alt={data.clubs[7].name}
    className={styles.clubImage}/>
    </Link>
</div>,
//************************************************** */

<div   style={style}>
<Link to={`/club-fair/${data.clubs[8].id}`}>
  <div className={`${styles.overlay} ${styles.overlayShow}`}>
    <h4
      className={`${styles.clubName} ${styles.clubNameShow}`}
    >
      {data.clubs[8].name}
    </h4>
  </div>
  <img
    src={`/clubs/${data.clubs[8].image}`}
    alt={data.clubs[8].name}
    className={styles.clubImage}/>
    </Link>
</div>,
//************************************************** */

<div  style={style}>
<Link to={`/club-fair/${data.clubs[9].id}`}>
  <div className={`${styles.overlay} ${styles.overlayShow}`}>
    <h4
      className={`${styles.clubName} ${styles.clubNameShow}`}
    >
      {data.clubs[9].name}
    </h4>
  </div>
  <img
    src={`/clubs/${data.clubs[9].image}`}
    alt={data.clubs[9].name}
    className={styles.clubImage}/>
    </Link>
</div>,
//************************************************** */

<div style={style}>
<Link to={`/club-fair/${data.clubs[10].id}`}>
  <div className={`${styles.overlay} ${styles.overlayShow}`}>
    <h4
      className={`${styles.clubName} ${styles.clubNameShow}`}
    >
      {data.clubs[10].name}
    </h4>
  </div>
  <img
    src={`/clubs/${data.clubs[10].image}`}
    alt={data.clubs[10].name}
    className={styles.clubImage}/>
    </Link>
</div>,
//************************************************** */

    ];
    
   

  if (!clubInfo) return <Redirect to="/club-fair" />;

  return (
    <div className={styles.club}>
      <h1>{clubInfo.name}</h1>
      <div className={styles.clubMedia}>
        <img
          className={styles.clubimage}
          src={`/clubs/${clubInfo.image}`}
          alt={clubInfo.name}
        />
        {clubInfo.video && (
          <MediaView
            className={styles.clubVideo}
            type="video"
            url={`/clubs/${clubInfo.video}`}
          />
        )}
      </div>
      {clubInfo.description.split("\n").map((fragment, i) => (
        <p key={i} className={styles.clubDescription}>
          {fragment}
        </p>
      ))}
      <AliceCarousel mouseTracking items={items} autoWidth  
        infinite  autoPlay
        autoPlayInterval={2000}
        animationDuration={2000}
        autoPlayStrategy="none"/>
    </div>
  );
}
