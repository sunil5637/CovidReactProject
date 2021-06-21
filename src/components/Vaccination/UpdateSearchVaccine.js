import React, { Component } from "react";
import axios from "axios";

import HandleSearch from "./HandleSearch";

class UpdateSearchVaccine extends Component {
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
      gotdata: false,
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  getData = async () => {
    try {
      const response = await axios.get(
        "https://localhost:44359/api/Vaccinations/" + this.state.id
      );

      console.log(response.data);
      this.setState({ obj: response.data });
      this.setState({ gender: response.data.gender, gotdata: true });
    } catch (error) {
      console.log(error);
    }
  };

  handleSubmit = async () => {
    await axios.put(
      "https://localhost:44359/api/Vaccinations/" + this.state.id,
      {
        id: this.state.id,
        fullname: this.state.fullname,
        age: this.state.age,
        gender: this.state.gender,
        address: this.state.address,
        phone: this.state.phone,
        aadhar: this.state.aadhar,
      }
    );
  };

  handleButton = () => {
    this.setState({ gotdata: true });
  };

  render() {
    const renderData = () => {
      if (this.state.gotdata === true)
        return <HandleSearch id={this.state.id} />;
    };

    return (
      <>
        <br />
        <br />
        <br />
        <br />
        <div
          style={{
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <input
            type="number"
            placeholder="Enter ID of the record"
            name="id"
            className="form-control"
            style={{ width: 250 }}
            onChange={this.handleChange}
            required
          />
          <input
            type="button"
            className="btn btn-secondary"
            value="Search"
            onClick={this.handleButton}
          />
        </div>
        <br />
        {renderData()}
      </>
    );
  }
}

export default UpdateSearchVaccine;
