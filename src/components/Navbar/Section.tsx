import styles from "./Activated.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { ContentPage } from "../../types";
import { Link } from "react-router-dom";

export default function Section({
  sectionName,
  sectionContent,
  onClick,
}: {
  sectionContent: ContentPage[];
  sectionName: string;
  onClick: () => void;
}) {
  const [mobileExpanded, setMobileExpanded] = useState(false);
  const toggleMobileExpanded = () => {
    setMobileExpanded(!mobileExpanded);
  };

  const contentPages = sectionContent?.map((content, i) => {
    if (content.link?.includes("http")) {
      return (
        <a key={i} href={content.link}>
          {content.title}
        </a>
      );
    }
    return (
      <Link key={i} to={content.link} onClick={onClick}>
        {content.title}
      </Link>
    );
  });

  return (
    <div className={`col-md-12 ${styles.day}`}>
      <h2>
        {sectionName}
        <i
          style={mobileExpanded ? expandedStyle : normalStyle}
          onClick={toggleMobileExpanded}
        >
          <FontAwesomeIcon icon={["fas", "chevron-down"]}></FontAwesomeIcon>
        </i>
      </h2>
      <span style={getSpanDisplay(mobileExpanded)}>{contentPages}</span>
    </div>
  );
}

const expandedStyle = {
  transform: "rotate(180deg)",
  transition: "transform 0.2s",
};

const normalStyle = {
  transform: "rotate(0)",
  transition: "transform 0.2s",
};

function getSpanDisplay(expanded: boolean) {
  return {
    display: !expanded && window.innerWidth < 790 ? "none" : "block",
  };
}
