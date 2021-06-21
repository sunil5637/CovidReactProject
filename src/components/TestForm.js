import React, { Component } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

class TestForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errmsg: "",
      patientname: "",
      age: null,
      gender: "",
      phone: "",
      dateofTest: "",
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleValidate = () => {
    let msg = "";
    if (
      this.state.patientname === "" ||
      this.state.age === null ||
      this.state.phone === "" ||
      this.state.dateofTest === ""
    )
      msg = (
        <p style={{ color: "red", fontStyle: "italic" }}>
          The above fields are mandatory.
        </p>
      );
    this.setState({ errmsg: msg });
    console.log(this.state);
  };

  handleSubmit = (e) => {
    axios
      .post("https://localhost:44359/api/BookTests/", {
        patientname: this.state.patientname,
        age: this.state.age,
        gender: this.state.gender,
        phone: this.state.phone,
        dateofTest: this.state.dateofTest
      })
      .then((response) => console.log(response));
  };

  render() {
    return (
      <>
        <div>
          <NavLink to="/AllTestRecords">List all Records</NavLink>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="patientname"
              className="form-control"
              placeholder="Patient Name"
              style={{ width: 400 }}
              onChange={this.handleChange}
            />
            <br />
            <input
              type="number"
              name="age"
              className="form-control"
              onChange={this.handleChange}
              placeholder="Age"
              style={{ width: 400 }}
            />
            <br />
            <label>
              {" "}
              <input
                type="radio"
                value="m"
                name="gender"
                checked={this.state.gender === "m"}
                onChange={this.handleChange}
              />{" "}
              Male{" "}
            </label>
            <label>
              {" "}
              <input
                type="radio"
                value="f"
                name="gender"
                checked={this.state.gender === "f"}
                onChange={this.handleChange}
              />
              {"  "}
              Female
            </label>
            <br />
            <input
              type="text"
              name="phone"
              className="form-control"
              onChange={this.handleChange}
              placeholder="Phone Number"
              style={{ width: 400 }}
            />
            <br />
            <input
              type="date"
              name="dateofTest"
              className="form-control"
              onChange={this.handleChange}
              placeholder="Date of Testing"
              style={{ width: 400 }}
            />
            <div>{this.state.errmsg}</div>
            <br />
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </form>
        </div>
      </>
    );
  }
}

export default TestForm;
