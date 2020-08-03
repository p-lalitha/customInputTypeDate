import React from "react";
import DatePicker from "react-datepicker";
import "./customcalender.css";
import "react-datepicker/dist/react-datepicker.css";

export default class Customcalender extends React.Component {
  state = {
    startDate: "",
  };

  handleChange = (date) => {
    this.setState({
      startDate: date,
    });
  };

  render() {
    return (
      <DatePicker
        placeholderText="Start date"
        onSelect={this.handleSelect}
        onChange={this.handleChange}
        selected={this.state.startDate}
      />
    );
  }
}
