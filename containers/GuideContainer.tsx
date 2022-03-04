import React from "react";
import { ReactElement } from "react";
import Facts from "../components/Facts";
import Guide from "../components/Guide";

function GuideContainer(): ReactElement {
  return (
    <main className="container-1">
      <Guide />
      <Facts />
    </main>
  );
}

export default GuideContainer;
