import React, { Component } from "react";

import "../style.css";

class Advisory extends Component {
  render() {
    return (
      <div style={{ padding: "20px 20px 10px 50px" }}>
        <br />
        <br />
        <br />
        <br />
        <h2>Advisory</h2>
        <hr />
        <div>
          <h4>Protect yourself and others from COVID-19</h4>
          <p>
            If COVID-19 is spreading in your community, stay safe by taking some
            simple precautions, such as physical distancing, wearing a mask,
            keeping rooms well ventilated, avoiding crowds, cleaning your hands,
            and coughing into a bent elbow or tissue. Check local advice where
            you live and work. <strong>Do it all!</strong>
          </p>
          <br />
          <h4>What to do to keep yourself and others safe from COVID-19</h4>
          <hr />
          <ul>
            <li>
              <strong>
                Maintain atleast 6 ft. of distance between yourself and others.
              </strong>
              <br />
              It will reduce your risk of catching the infection when someone
              coughs or speaks.
            </li>
            <li>
              <strong>Make wearing mask a new normal.</strong>
              <br />
              For anything if you have to leave the house, don't forget to wear
              a mask tightly around your nose and mouth.
            </li>
          </ul>
          <br />
          <h5>
            For wearing masks, certain steps must be followed to guarantee
            safety.
          </h5>
          <ul>
            <li>
              Clean your hands before you put your mask on, as well as before
              and after you take it off, and after you touch it at any time.
            </li>
            <li>Make sure it covers both your nose, mouth and chin.</li>
            <li>
              When you take off a mask, store it in a clean plastic bag, and
              every day either wash it if it’s a fabric mask, or dispose of a
              medical mask in a trash bin.
            </li>
            <li>Don’t use masks with valves.</li>
          </ul>
          <br />
          <h4>How to make your Environment safer</h4>
          <hr />
          <ul>
            <li>
              <strong>
                Avoid the 3Cs: spaces that are closed, crowded or involve close
                contact.
              </strong>
              <ul style={{ listStyle: "circle" }}>
                <li>
                  The main cause of the spread of the COVID-19 is people
                  gathering in a single place such as{" "}
                  <strong>restaurant</strong>,<strong>rallies</strong>,
                  <strong>parties</strong>.
                </li>
                <li>
                  The risk of catching the virus is more imminent in closed
                  spaces with not so great ventilation.
                </li>
              </ul>
            </li>
            <li>
              <strong>Meet people outside.</strong>
              <ul style={{ listStyle: "circle" }}>
                <li>For more information check out our FAQ section .</li>
              </ul>
            </li>
          </ul>
          <br />
          <h4>Maintain a good hygiene.</h4>
          <hr />
          <ul>
            <li>
              <strong>
                Regularly and thoroughly clean your hands with soap and water or
                an alcohol based hand-rub or hand-sanitizer.
              </strong>{" "}
              This helps in eliminating the virus that may be on your hands.
            </li>
            <li>
              <strong>Avoid touching your nose or eyes.</strong> Your hands may
              touch surfaces thay may have the virus. So if your hands catches
              it, you won't know and thus avoid bringing your hands towards your
              face unless and until you wash them thoroughly.{" "}
            </li>
            <li>
              <strong>Disinfect surfaces frequently</strong> with an alcohol rub
              especially those surfaces which are touched frequently like{" "}
              <strong>
                door handle, phone screens, faucets, light switches
              </strong>
              .
            </li>
            <li>
              <strong>Cover your mouth when you sneeze or cough</strong> with a
              handkerchief or tissue. If both are not available at the time,
              sneeze into your <strong>bent elbow</strong>.
            </li>
          </ul>
          <br />
          <h4>What to do if you feel unwell.</h4>
          <hr />
          <ul>
            <li>
              <strong>First confirm the symptoms for COVID-19.</strong> To know
              the smyptoms of COVID-19, go to the Symptoms Page .
            </li>
            <li>
              <strong>
                Stay home and self isolate yourself even if you have minor
                symptoms.
              </strong>{" "}
              Call your health care provider for advice and avoid going outside
              at all costs to contain the spread.
            </li>
            <li>
              <strong>
                If you have a fever, cough and difficulty breathing, seek
                medical attention immediately. Call by telephone first, if you
                can{" "}
              </strong>{" "}
              and follow the directions of your local health authority.
            </li>
            <li>For more information check out the FAQ section.</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Advisory;
