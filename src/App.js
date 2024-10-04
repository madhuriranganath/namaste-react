import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";

//Example to show we can use both default export and named export in the same file
// import { TEST } from "./components/Header";

// const test = {TEST};
// console.log(test);

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

// const parent = React.createElement(
//     "div",
//     { id: "parent" },
//     [React.createElement("div",{ id: "child" }, [
//             React.createElement("h1", {},"This is Namaste React"), 
//             React.createElement("h2", {},"I'm an h2 tag")
//     ]),
//     React.createElement("div",{ id: "child" }, [
//         React.createElement("h1",{},"I'm an h1 tag"), 
//         React.createElement("h2",{},"I'm an h2 tag")
//     ])
// ]);

// const heading = React.createElement(
//     "h1", 
//     { id: "heading" }, 
//     "Namaste React!"
// );
// console.log(heading);
/**console.log(heading); // returns object */

//React Component
// const jsxHeading = (<h1 className="head">
//     Namaste React using JSX
//     </h1>);

// console.log(jsxHeading);

//React Functional Component

// const Title = () => (
//     <h2>I'm title component inside heading component</h2>
// );

// const HeadingComponent = () => <h1>Namaste React in Functional Component</h1>;

// Component Composistion - Component inside a component
// const HeadingComponent2 = () => (
//     <div id="container">
//         <Title />
//         <Title></Title>
//         {Title()}
//         {jsxHeading}
//         <h1>Multiple line functional component</h1>
//     </div>
    
// );

// const HeadingComponent3 = () => {
//     return <h1>Multiple line functional component</h1>;
// };


// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<HeadingComponent2 />);

//root.render(jsxHeading)

//root.render(heading); // render will be respensible to convert object to heading tag and put it up on DOM

// Chunking
// Dynamic bundling
// Lazy loading
// Demand loading
// Dynamic import

const Grocery = lazy(() => import("./components/Grocery"));



const Applayout = () => {
    const [userName, setuserName] = useState();

    useEffect(
        () => {
            const data = {
                name: "Madhuri Ranganath"
            }
            setuserName(data.name);
        }, []
    )

    
    return (
        <UserContext.Provider value={{userName: userName, setuserName}}>
            <div className="app">
                <Header />
                <Outlet />
            </div>
        </UserContext.Provider>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Applayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<h1>Loding....</h1>}><Grocery /></Suspense>
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu />
            },
        ],
        errorElement: <Error />
    },
    
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<Applayout />);

root.render(<RouterProvider router={appRouter} />);