import React, { Component } from "react";

class RealTimeData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      delhi: {},
      mumbai: {},
      bangalore: {},
      kolkata: {},
    };
  }

  async componentDidMount() {
    const response = await fetch(
      "https://api.covid19india.org/v4/min/data.min.json"
    );
    const data = await response.json();
    this.setState({
      delhi: data.DL.total,
      mumbai: data.MH.districts.Mumbai.total,
      bangalore: data.KA.districts["Bengaluru Urban"].total,
      kolkata: data.WB.districts.Kolkata.total,
    });
    console.log(data);
  }

  render() {
    return (
      <>
        <div
          style={{
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <h3 style={{ paddingTop: 100 }}>Real Time Covid Statistics</h3>
        </div>
        <hr />
        <div
          style={{
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <div style={{ paddingTop: 50 }}>
            <table className="table">
              <tr className="table-active">
                <th>City</th>
                <th>Confirmed Cases</th>
                <th>Total Deceased</th>
                <th>Total Recovered</th>
                <th>Total Tested</th>
                <th>Total People Vaccinated (shot - 1)</th>
                <th> (shot - 2)</th>
              </tr>
              <tr>
                <td>Delhi</td>
                <td>{this.state.delhi.confirmed}</td>
                <td>{this.state.delhi.deceased}</td>
                <td>{this.state.delhi.recovered}</td>
                <td>{this.state.delhi.tested}</td>
                <td>{this.state.delhi.vaccinated1}</td>
                <td>{this.state.delhi.vaccinated2}</td>
              </tr>
              <tr>
                <td>Mumbai</td>
                <td>{this.state.mumbai.confirmed}</td>
                <td>{this.state.mumbai.deceased}</td>
                <td>{this.state.mumbai.recovered}</td>
                <td>{this.state.mumbai.tested}</td>
                <td>{this.state.mumbai.vaccinated1}</td>
                <td>{this.state.mumbai.vaccinated2}</td>
              </tr>
              <tr>
                <td>Bangalore</td>
                <td>{this.state.bangalore.confirmed}</td>
                <td>{this.state.bangalore.deceased}</td>
                <td>{this.state.bangalore.recovered}</td>
                <td>{this.state.bangalore.tested}</td>
                <td>{this.state.bangalore.vaccinated1}</td>
                <td>{this.state.bangalore.vaccinated2}</td>
              </tr>
              <tr>
                <td>Kolkata</td>
                <td>{this.state.kolkata.confirmed}</td>
                <td>{this.state.kolkata.deceased}</td>
                <td>{this.state.kolkata.recovered}</td>
                <td>{this.state.kolkata.tested}</td>
                <td>{this.state.kolkata.vaccinated1}</td>
                <td>{this.state.kolkata.vaccinated2}</td>
              </tr>
            </table>
          </div>
        </div>
      </>
    );
  }
}

export default RealTimeData;
