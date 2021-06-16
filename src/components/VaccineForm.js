import React, { Component } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

class VaccineForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errmsg: "",
      name: "",
      age: null,
      gender: "",
      address: "",
      phone: "",
      aadhar: "",
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleValidate = () => {
    let msg = "";
    if (
      this.state.name === "" ||
      this.state.age === null ||
      this.state.address === "" ||
      this.state.phone === "" ||
      this.state.aadhar === ""
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
      .post("https://localhost:44359/api/Vaccinations/", {
        fullname: this.state.name,
        age: this.state.age,
        gender: this.state.gender,
        phone: this.state.phone,
        address: this.state.address,
        aadhar: this.state.aadhar,
      })
      .then((response) => console.log(response));
  };

  render() {
    return (
      <>
        <div>
          <NavLink to="/AllVaccineRecords">List all Records</NavLink>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Full Name"
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
              type="text"
              name="address"
              className="form-control"
              onChange={this.handleChange}
              placeholder="Address"
              style={{ width: 400 }}
            />
            <br />
            <input
              type="text"
              name="aadhar"
              className="form-control"
              onChange={this.handleChange}
              placeholder="Aadhar no."
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

export default VaccineForm;
