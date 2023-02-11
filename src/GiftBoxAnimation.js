import React, { useReducer } from "react";
import "./styles.css";

import box from "./images/box.png";
import boxLid from "./images/box-lid.png";
import kuku from "./images/jump-character.png";
//import ConfettiGenerator from "./CanvasConfetti";
import Confetti from "./confetti/Confetti";
// import spotify from "./images/skype.png";
import kuku2 from "./images/jump-character.png";
import kuku3 from "./images/jump-character.png";
const init_state = {
  move: "move",
  jump: "",
  jumpx: "",
  jumpy: "",
  rotated: "",
  rotating: ""
};
export default function GiftBoxAnimation() {
  const [state, setState] = useReducer(
    (state, new_state) => ({
      ...state,
      ...new_state
    }),
    init_state
  );

  const { move, rotating, rotated, jump, jumpx ,jumpy } = state;

  function animate() {
    let isDone = rotated === "rotated" ? true : false;

    if (!isDone) {
      setState({ rotating: "rotating" });
      setTimeout(() => {
        setState({ jump: "jump" });
      }, 300);
      setTimeout(() => {
      setState({ jumpx: "jumpx" });
      }, 300);
      setTimeout(() => {
        setState({ jumpy: "jumpy" });
        }, 300);
      setTimeout(() => {
        setState({ rotated: "rotated" });
      }, 1000);
    } else {
      setState(init_state);
    }
    let moving = move === "move" ? "" : "move";
    setState({ move: moving });
  }

  return (
    <div className="App">
      <Confetti open={jump === "jump"} />
      <div className="img-container">
        <img className={`kuku ${jump}`} src={kuku} alt="kuku" />
        <img className={`kuku2 ${jumpx}`} src={kuku2} alt="kuku2"/>
        <img className={`kuku3 ${jumpy}`} src={kuku3} alt="kuku3"/> 
        <button className="box" onClick={() => animate()}>
          <img src={box} alt="box" />
        </button>
        <img
          className={`lid ${move} ${rotating} ${rotated}`}
          src={boxLid}
          alt="box-lid"
        />
      </div>
    </div>
  );
}
