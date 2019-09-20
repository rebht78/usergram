import React from "react";
import "./users.styles.css";

export default class Users extends React.Component {
  render() {
    return (
      <div className="card">
        <p>Username : {this.props.name}</p>
        <p>Email : {this.props.email}</p>
        <img
          src={`https://robohash.org/${this.props.name}?set=set5&size=180x180`}
          alt="Profile of User"
        />
      </div>
    );
  }
}
