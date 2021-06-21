import React, { Component } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

class VaccineData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      loading: true,
    };
  }

  async componentDidMount() {
    const response = await axios.get(
      "https://localhost:44359/api/Vaccinations/"
    );
    this.setState({ items: response.data, loading: false });
  }

  handleDelete = async (event) => {
    await axios.delete(
      "https://localhost:44359/api/Vaccinations/" + event.target.value
    );
    window.location.reload();
  };

  render() {
    const list = [];
    this.state.items.forEach((element) => {
      list.push(
        <tr>
          <td>{element.id}</td>
          <td>{element.fullname}</td>
          <td>{element.age}</td>
          <td>{element.gender}</td>
          <td>{element.phone}</td>
          <td>{element.address}</td>
          <td>{element.aadhar}</td>

          <td>
            <button
              className="btn btn-danger"
              value={element.id}
              onClick={this.handleDelete}
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
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
          <h3>All Vaccination Records</h3>
        </div>
        <div>
          <table className="table">
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Phone Number</th>
              <th>Address</th>
              <th>Aadhar No.</th>
            </tr>
            {this.state.loading ? <h2>Loading</h2> : list}
          </table>
        </div>
        <br />
        <div
          style={{
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <NavLink to="/UpdateVaccinationRecord">
            <button className="btn btn-success">Update Record</button>
          </NavLink>
        </div>
        <br />
        <div
          style={{
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <NavLink to="/VaccineReg">
            <button className="btn btn-success">Add Another Record</button>
          </NavLink>
        </div>
      </>
    );
  }
}

export default VaccineData;
