import { useEffect, useState } from "react";

const User = (props) => {

    const [count] = useState(0);
    const [count1] = useState(1);

    useEffect(() => {
        
    }, []);

    console.log("Functional component");
    return (<div className="user-functional">
        <h1>Count: {count}</h1>
        <h1>Count1: {count1}</h1>
        <h1>Name: {props.name}</h1>
        <h2>Location: Mysore</h2>
        <h2>Contact us: 570004</h2>
        <p>Funcational Based Component</p>
    </div>);
};

export default User;