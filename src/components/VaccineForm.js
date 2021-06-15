import React, { Component } from "react";
import axios from "axios";

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
  };

  render() {
    return (
      <>
        {this.state.gender}
        <form onSubmit={this.submitHandler}>
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
          <input
            id="male"
            value="male"
            name="gender"
            type="radio"
            OnChange={this.handleChange}
          />{" "}
          Male{" "}
          <input
            id="female"
            value="female"
            name="gender"
            type="radio"
            OnChange={this.handleChange}
          />{" "}
          Female
          <br />
          <br />
          <input
            type="number"
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
      </>
    );
  }
}

export default VaccineForm;
