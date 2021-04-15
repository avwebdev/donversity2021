import React, { useContext } from "react";

import { DataContext } from "../../misc/DataContext";
import { ContentSections } from "../../types";

export default function ClubsPage() {
  const data = useContext(DataContext) as ContentSections;
  console.log(data);

  return null;
}
