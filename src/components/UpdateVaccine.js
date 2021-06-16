import React, { Component } from "react";
import axios from "axios";

class UpdateVaccine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      fullname: "",
      age: null,
      gender: "",
      address: "",
      phone: "",
      aadhar: "",
      errMsg: "",
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleUpdate = async (event) => {
    console.log(this.state);
    await axios.put(
      "https://localhost:44359/api/Vaccinations/" + this.state.id,
      {
        id: this.state.id,
        fullname: this.state.fullname,
        age: this.state.age,
        gender: this.state.gender,
        phone: this.state.phone,
        address: this.state.address,
        aadhar: this.state.aadhar,
      }
    );
  };

  render() {
    return (
      <>
        <br />
        <br />
        <br />
        <br />
        <div
          style={{
            paddingLeft: 50,
          }}
        >
          <form onSubmit={this.handleUpdate}>
            <input
              type="number"
              name="id"
              className="form-control"
              placeholder="Id"
              onChange={this.handleChange}
              style={{ width: 300 }}
            />
            <br />
            <input
              type="text"
              name="fullname"
              className="form-control"
              placeholder="Full Name"
              onChange={this.handleChange}
              style={{ width: 300 }}
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
              Update
            </button>
          </form>
        </div>

        <div>{this.state.errMsg}</div>
      </>
    );
  }
}

export default UpdateVaccine;
