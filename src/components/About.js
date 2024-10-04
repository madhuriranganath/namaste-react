import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

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

                <h3>User name from User context --- 
                    <UserContext.Consumer>
                    {(data) => data.userName}
                    </UserContext.Consumer>
                </h3>
    
                <User name="Madhuri Ranganth (Funcation)" />
    
                <UserClass name={"First (Class)"} location={"Mysore"} />
            </div>
        );
    }
}

export default About;