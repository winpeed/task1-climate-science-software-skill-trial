import Link from "next/link";
import React, { useState, useEffect } from "react";
import { ReactElement } from "react";

function Guide(): ReactElement {
  return (
    <section className="guide-wrapper">
      <h2>Still not sure what to expect?</h2>
      <p>
        Visit our participant advice page which has been specifically designed
        to help you on your journey through the qualifier and quarter finals.
      </p>
      <Link href="/" passHref>
        <a>
          <span> Participant Guide </span>
          <span>{">"}</span>
        </a>
      </Link>
    </section>
  );
}

export default Guide;
