import React from "react";
import Card from "../card/card.component";
import "./card-list.styles.css";

const CardList = (props) => (
  <div className="card-list">
    {props.monsters.map((monster) => (
      <Card monster={monster} key={monster.id} />
    ))}
  </div>
);

export default CardList;
