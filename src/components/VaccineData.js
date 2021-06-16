import React, { Component } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

class VaccineData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  async componentDidMount() {
    const response = await axios.get(
      "https://localhost:44359/api/Vaccinations/"
    );
    this.setState({ items: response.data });
  }

  handleDelete = (id) => {
    console.log(id);
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
          <table class="table table-hover">
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Phone Number</th>
              <th>Address</th>
              <th>Aadhar No.</th>
            </tr>
            {list}
          </table>
        </div>
        <div
          style={{
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <NavLink to="/DeleteVaccinationRecord">Delete Record</NavLink>
        </div>
        <div
          style={{
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <NavLink to="/UpdateVaccinationRecord">Update Record</NavLink>
        </div>
      </>
    );
  }
}

export default VaccineData;
