import React, { useState } from "react";
import "./form.css";
function Form() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [requirements, setRequirements] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="comp">
      <div>
        <div className="para">
          <p>
            Searching for <strong>Augmented</strong>{" "}
          </p>
          <p>
            <strong>Development</strong> Teams to{" "}
          </p>
          <p>steer your products </p>
          <p>towords triumph?"</p>
        </div>
        <div className="list">
          <div>
            <h1>50+</h1> <p>Clients</p>
          </div>
          <div>
            <h1>80+</h1> <p>Projects successfully</p>
            <p>completed</p>
          </div>
          <div>
            <h1>60%</h1>
            <p>of the clients converted into </p>
            <p>long term engagement partners</p>
          </div>
        </div>
      </div>
      <div className="second-part">
        <div className="desc">
          <h3> Fill out the form </h3>
          <p>Our Team will touch base with you within 24 hours.</p>
        </div>
        <form onSubmit={handleSubmit} id="contact">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name*"
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email*"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />

          <input
            type="text"
            name="country"
            placeholder="Country"
            value={country}
            onChange={(event) => setCountry(event.target.value)}
          />

          <input
            type="tel"
            name="contactNumber"
            placeholder="Contact Number"
            value={contactNumber}
            onChange={(event) => setContactNumber(event.target.value)}
          />

          <textarea
            name="requirements"
            placeholder="Tell us your requirements*"
            value={requirements}
            onChange={(event) => setRequirements(event.target.value)}
            required
          />
        </form>
        <div className="desc1">
          <button type="submit" form="contact">
            Submit
          </button>

          <button className="btn-style1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="20"
              fill="white"
            >
              <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Form;
