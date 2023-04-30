import React from "react";

export default function Lesson(props) {
  return (
    <>
      <p>I am here</p>
      {props.name}
      {props.age}
      {props.date}
    </>
  );
}
