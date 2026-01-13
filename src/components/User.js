import { useEffect, useState } from "react";

const User = (props) => {
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("set interval with function");
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="user-card m-4 p-4 bg-gray-50 rounded-lg">
      <h2>name: {props.name}</h2>
      <h2>Location: Dehradun</h2>
      <h2>Contact: @akshaymarch7</h2>
    </div>
  );
};

export default User;
