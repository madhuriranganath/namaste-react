import React from "react";

class UserClass extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            count: 1,
            count2: 2,
            userInfo: {
                name: this.props.name,
                location: this.props.location
            }
        };
        console.log(this.props.name+ " Child constructor");
    }

    async componentDidMount(){
        console.log(this.props.name+ " Child component did mount");
        const userData = await fetch("https://api.github.com/users/octocat");
        const json = await userData.json();

        this.setState({
            userInfo: json
    });
        

        console.log(this.state.userInfo)

    }

    componentDidUpdate(){
        console.log("Component will update");
    }

    componentWillUnmount(){
        console.log("component will unmount");
    }

    render() {

        console.log(this.props.name+ " Child render");

        const {name, location} = this.props;
        const {count, count2} = this.state;

        return (<div className="user-class">
            <h1>Count: {count}</h1>
            
            <h1>Count2: {count2}</h1>

            <button onClick={
                () => {
                    this.setState({
                        count: this.state.count + 1,
                        count2: this.state.count2 + 1
                    });
                }
            }>Increase Count</button>
            <h1>Name: {this.state.userInfo.name}</h1>
            <h2>Location: {this.state.userInfo.location}</h2>
            <h2>Contact us: 570004</h2>
            <p>Class Based Component</p>
        </div>);
    };
};

export default UserClass;