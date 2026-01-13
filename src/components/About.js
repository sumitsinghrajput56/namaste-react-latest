import UserContext from "../utils/userContext";
import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent constructor");
  }

  componentDidMount() {
    console.log("Parent Component did mount");
  }
  render() {
    console.log("Parent render");
    return (
      <div>
        <h1>About</h1>
        <div>
          LoggedIn User
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="text-lg font-bold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        <h1>This is Namaste React Web Series</h1>
        {/* <User name={"First"} /> */}
        <UserClass name={"First"} location={"Dehradun"} />
      </div>
    );
  }
}

// Parent constructor
// Parent render
// FirstChild constructor
// FirstChild Render
// SecondChild constructor
// SecondChild Render
// FirstChild Component Did Mount
// SecondChild Component Did Mount
// Parent Component did mount

export default About;
