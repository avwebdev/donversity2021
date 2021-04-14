import styles from "./Activated.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function Section({ sectionName, info }: any) {

    const [mobileExpanded, setMobileExpanded] = useState(false);
    const toggleMobileExpanded = () => {
        setMobileExpanded(!mobileExpanded);
        console.log("change");
    }
    return (
        <div className={`col-md-12 ${styles.day}`}>
            <h2>{sectionName}
                <i style={mobileExpanded ? expandedStyle : normalStyle} onClick={toggleMobileExpanded}>
                    <FontAwesomeIcon icon={["fas", "chevron-down"]}></FontAwesomeIcon>
                </i>
            </h2>
            <span style={getSpanDisplay(mobileExpanded)}>
                <a href="https://google.com">Cooking with Butterfield!</a>
                <a href="https://google.com">Latina club celebration</a>
                <a href="https://google.com">A note from Green Team (world day 2020)</a>
            </span>
        </div>
    )
}

const expandedStyle = {
    transform: "rotate(180deg)",
    transition: "transform 0.2s"
}

const normalStyle = {
    transform: "rotate(0)",
    transition: "transform 0.2s"
}

function getSpanDisplay(expanded: boolean) {
    return {
        display: !expanded && window.innerWidth < 790 ? "none" : "block"
    }
}