import React, { Component } from "react";
import axios from "axios";

class DeleteVaccine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleDelete = () => {
    console.log(this.state.id);
    axios.delete("https://localhost:44359/api/Vaccinations/" + this.state.id);
    window.location.reload();
  };

  render() {
    return (
      <>
        <br />
        <br />
        <br />
        <br />
        <h3>Delete Vaccination Record</h3>
        <div
          style={{
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <input
            name="id"
            className="form-control"
            placeholder="Record ID"
            style={{ width: 300 }}
            onChange={this.handleChange}
          />{" "}
          <br />
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.handleDelete}
          >
            Delete
          </button>
        </div>
      </>
    );
  }
}

export default DeleteVaccine;
