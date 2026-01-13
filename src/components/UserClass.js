import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "sumit",
        location: "bengaluru",
      },
    };

    console.log(this.props.name + "Child constructor");
  }

  async componentDidMount() {
    console.log(this.props.name + "Child Component Did Mount");

    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    this.timmer=setInterval(()=>{
        console.log("SetInterval start");
    },1000)
  }

componentDidUpdate () {
  console.log(this.props.name + " component did update call....");
}

componentWillUnmount () {
  console.log("component will unmount");

  clearInterval(this.timmer);
}

  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    console.log(this.props.name + "Child Render");

    return (
      <div className="user-card">
        <img src={avatar_url} height={200} width={300} />
        <h2>name: {name}</h2>
        <h2>Location: {location}</h2>
        <h2>Contact: @akshaymarch7</h2>
      </div>
    );
  }
}

// FirstChild constructor
// FirstChild Render
// FirstChild Component Did Mount
// FirstChild Render
// First component did update call....

export default UserClass;
