import React, { Component } from "react";
import uniqid from "uniqid"
import ReactDOM from "react-dom";

const Overview = (props) => {
    const {tasks} = props;
    console.log(tasks);
    return (
        <ul>
            {tasks.map((task) => {
                return <li key={uniqid()}>{task}</li>
            })}
        </ul>
    );
  };
  
  export default Overview;