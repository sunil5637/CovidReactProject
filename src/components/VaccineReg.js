import React, { Component } from "react";
import VaccineForm from "./VaccineForm";

class VaccineReg extends Component {
  render() {
    return (
      <>
        <br />
        <br />
        <br />
        <br />
        <div class="d-flex justify-content-center">
          <h3>Vaccine Registration</h3>
        </div>
        <hr />
        <div class="d-flex justify-content-center">
          <VaccineForm />
        </div>
      </>
    );
  }
}

export default VaccineReg;
