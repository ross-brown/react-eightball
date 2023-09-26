import React, { useState } from "react";
import "./EightBall.css";
import choice from "./utils";

const eightBallData = [
  { msg: "It is certain.", color: "green" },
  { msg: "It is decidedly so.", color: "green" },
  { msg: "Without a doubt.", color: "green" },
  { msg: "Yes - definitely.", color: "green" },
  { msg: "You may rely on it.", color: "green" },
  { msg: "As I see it, yes.", color: "green" },
  { msg: "Most likely.", color: "green" },
  { msg: "Outlook good.", color: "green" },
  { msg: "Yes.", color: "green" },
  { msg: "Signs point to yes.", color: "goldenrod" },
  { msg: "Reply hazy, try again.", color: "goldenrod" },
  { msg: "Ask again later.", color: "goldenrod" },
  { msg: "Better not tell you now.", color: "goldenrod" },
  { msg: "Cannot predict now.", color: "goldenrod" },
  { msg: "Concentrate and ask again.", color: "goldenrod" },
  { msg: "Don't count on it.", color: "red" },
  { msg: "My reply is no.", color: "red" },
  { msg: "My sources say no.", color: "red" },
  { msg: "Outlook not so good.", color: "red" },
  { msg: "Very doubtful.", color: "red" },
];


/** Magic Eightball that displays a message
 *
 * Props:
 * - answers
 *
 * State:
 * - color
 * - message
 *
 * App -> EightBall
 */

function EightBall({ answers = eightBallData }) {
  const [color, setColor] = useState("black");
  const [message, setMessage] = useState("Think of a Question");

  function handleClick() {
    const { msg, color } = choice(answers);
    setColor(color);
    setMessage(msg);
  }

  return (
    <div
      className="EightBall"
      onClick={handleClick}
      style={{ backgroundColor: color }}>
      <p>{message}</p>
    </div>
  );

}

export default EightBall;
