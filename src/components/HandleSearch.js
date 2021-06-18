import React, { Component } from "react";
import axios from "axios";

class HandleSearch extends Component {
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
      msg: "",
      obj: {},
      msg: "",
      status: null,
    };
  }

  async componentDidMount() {
    const response = await axios.get(
      "https://localhost:44359/api/Vaccinations/" + this.props.id
    );
    this.setState({ obj: response.data, gender: response.data.gender });
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async () => {
    await axios.put(
      "https://localhost:44359/api/Vaccinations/" + this.props.id,
      {
        id: this.props.id,
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
        <div>{this.state.msg}</div>
        <div
          style={{
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="fullname"
              className="form-control"
              placeholder={this.state.obj.fullname}
              style={{ width: 400 }}
              onChange={this.handleChange}
            />
            <br />
            <input
              type="number"
              name="age"
              className="form-control"
              onChange={this.handleChange}
              placeholder={this.state.obj.age}
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
              placeholder={this.state.obj.phone}
              style={{ width: 400 }}
            />
            <br />
            <input
              type="text"
              name="address"
              className="form-control"
              onChange={this.handleChange}
              placeholder={this.state.obj.address}
              style={{ width: 400 }}
            />
            <br />
            <input
              type="text"
              name="aadhar"
              className="form-control"
              onChange={this.handleChange}
              placeholder={this.state.obj.aadhar}
              style={{ width: 400 }}
            />
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

export default HandleSearch;
