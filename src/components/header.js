import React from "react";
import DatePicker from "react-datepicker";
import "./customcalender.css";
import "react-datepicker/dist/react-datepicker.css";

export default class Header extends React.Component {
  state = {
    startDate: "",
    endDate: "",
    ccid: 1,
  };

  handleChange = (date) => {
    this.setState({
      startDate: date,
    });
  };

  handleChangeEnd = (date) => {
    this.setState({
      endDate: date,
    });
  };

  render() {
    return (
      <div className="col-xl-12">
        <div className="card">
          <nav
            className="navbar navbar-light "
            style={{ backgroundColor: "#1C6EA4" }}
          >
            <div className="row" style={{ paddingTop: "8px", width: "100%" }}>
              <div className="col-sm-3">
                <select
                  name="city"
                  value={this.state.ccid}
                  id="city"
                  onChange={this.handleChangeCity}
                >
                  <option value={""}>Select Cities</option>
                </select>
              </div>

              {/* Added code */}
              <div className="col-sm-3">
                <DatePicker
                  placeholderText="Start Date"
                  onSelect={this.handleSelect}
                  onChange={this.handleChange}
                  selected={this.state.startDate}
                />
              </div>

              <div className="col-sm-3">
                <DatePicker
                  placeholderText="End Date"
                  onSelect={this.handleSelect}
                  onChange={this.handleChangeEnd}
                  selected={this.state.endDate}
                />
              </div>

              <div className="col-sm-3">
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={this.handleSearchShipment}
                >
                  Search
                </button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}
