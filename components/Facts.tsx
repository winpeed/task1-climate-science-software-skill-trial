import React from "react";
import { ReactElement } from "react";
import { facts } from "../utils/facts";

function Facts(): ReactElement {
  return (
    <section className="facts-wrapper">
      <h4>Which of the below statements about electricity is not true?</h4>

      {facts.map((fact: { id: number; description: string }) => {
        const { id, description } = fact;
        return (
          <div key={id} className="fact hidden">
            <span className="circle-placeholder"></span>
            <p>{description}</p>
          </div>
        );
      })}
    </section>
  );
}

export default Facts;
