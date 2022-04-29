import React from "react";
import PeopleBody from "./PeopleBody";
import { peoples } from "../../../data/Data";

function Peoples() {
  return (
    <div>
      {peoples?.map((people) => {
        return (
          <PeopleBody
            key={people.id}
            imageUrl={people.imageUrl}
            name={people.name}
            people={people}
          />
        );
      })}
    </div>
  );
}

export default Peoples;
