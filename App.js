import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Nested HTML tags
 * 
 * <div id="parent">
 *  <div id="child">
 *      <h1>I'm an h1 tag</h1>
 *      <h2>I'm an h2 tag</h2>
 *  </div>
 *  <div id="child2">
 *      <h1>I'm an h1 tag</h1>
 *      <h2>I'm an h2 tag</h2>
 *  </div>
 * </div>
 * 
 * ReactElement(object) => HTML(Browser understand)
 * 
 */

const parent = React.createElement(
    "div",
    { id: "parent" },
    [React.createElement("div",{ id: "child" }, [
            React.createElement("h1", {},"This is Namaste React"), 
            React.createElement("h2", {},"I'm an h2 tag")
    ]),
    React.createElement("div",{ id: "child" }, [
        React.createElement("h1",{},"I'm an h1 tag"), 
        React.createElement("h2",{},"I'm an h2 tag")
    ])
]);

const heading = React.createElement(
    "h1", 
    { id: "heading" }, 
    "Hello World from React!"
);

/**console.log(heading); // returns object */

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent)

//root.render(heading); // render will be respensible to convert object to heading tag and put it up on DOM