import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends Component {

    constructor(props){
        super(props);

        console.log("Parent constructor");
    }

    componentDidMount(){
        console.log("Parent componentDidMount");
    }

    render() {
        console.log("Parent render");

        return (
            <div>
                <h1>About Page</h1>
                <h2>This is Namaste React Series</h2>
    
                <User name="Madhuri Ranganth (Funcation)" />
    
                <UserClass name={"First (Class)"} location={"Mysore"} />
            </div>
        );
    }
}

export default About;