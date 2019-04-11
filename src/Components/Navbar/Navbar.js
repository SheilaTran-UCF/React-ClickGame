import React from "react";
import "./Navbar.css";

const Navbar = props => (
      <div>
      <ul className="nav nav-pills nav-justified">
          <li>Fishing Clicky-Game</li>
          <li
              className={props.message.indexOf('Sorry!') !== -1 ? 
                  "desc-incorrect" : 
                  props.message.indexOf('Nice', 'Good') !== -1 ?
                      "desc-correct" :
                      "desc-normal"}
          >
              {props.message}
          </li>
          <li>Score: <span style={{color: "yellow"}}>{props.score}</span> | Top Score: <span style={{color: "red"}}></span>{props.topScore}</li>
      </ul>
  </div>
);

export default Navbar;