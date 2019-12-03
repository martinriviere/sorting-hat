import React, { Component } from "react";
import { connect } from "react-redux";
import Message from "../components/Message";

class Result extends Component {
  constructor(props) {
    super(props);
    setInterval(() => {
      const action = {
        type: "UPDATE_CHOICE_WITH_MY_INDEX",
        indexSelected: Math.floor(Math.random() * 4)
      };
      this.props.dispatch(action);
    }, 1000);
  }

  render() {
    const { selectedHouse, houses } = this.props;
    return (
      <div>
        <ul>
          {houses.map(house => (
            <li key={house}>{house}</li>
          ))}
        </ul>
        <Message message={selectedHouse} />
      </div>
    );
  }
}

export default connect(store => store)(Result);
