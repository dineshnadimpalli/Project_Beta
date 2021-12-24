import React from "react";

const Main = (props) => {
  console.log("======props======", props);
  return (
    <div>
      <h1>{props.header}</h1>
      <h3>{props.subtitle}</h3>
      {props.greeting()}
      {props.children}
      {props.renderSmileys().map((smiley) => {
        return <p>{`Here is my ${smiley}`}</p>;
      })}
    </div>
  );
};

export default Main;
