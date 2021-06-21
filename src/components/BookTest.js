import React, { Component } from "react";
import TestForm from "./TestForm";

class BookTest extends Component {
  render() {
    return (
      <>
        <br />
        <br />
        <br />
        <br />
        <div className="d-flex justify-content-center">
          <h3>Book a Covid Test</h3>
        </div>
        <hr />
        <div className="d-flex justify-content-center">
          <TestForm />
        </div>
      </>
    );
  }
}

export default BookTest;
