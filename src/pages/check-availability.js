import React from "react";

import MainHeader from "../components/MainHeader";
import MainFooter from "../components/MainFooter";
import "./check-availability.scss";

export default function CheckAvailability() {
  return (
    <div className="container">
      <MainHeader barQuote="Something wise about availability" />
      <main className="availability">
        <figure></figure>
        <form name="check-availability" method="POST" data-netlify="true">
          <input type="hidden" name="form-name" value="check-availability" />{" "}
          <fieldset>
            <label htmlFor="name">
              Name
              <input type="text" name="name" id="name" />
            </label>
            <label htmlFor="organization">
              Organization
              <input type="text" name="organization" id="organization" />
            </label>
            <label htmlFor="phone">
              Phone
              <input type="text" name="phone" id="phone" />
            </label>
            <label htmlFor="email">
              Email
              <input type="text" name="email" id="email" />
            </label>

            <fieldset>
              <label htmlFor="possible-date-1">
                Possible Date and Time
                <input
                  type="text"
                  name="possible-date-1"
                  id="possible-date-1"
                />
              </label>
              <label htmlFor="possible-date-2">
                Possible Date and Time
                <input
                  type="text"
                  name="possible-date-2"
                  id="possible-date-2"
                />
              </label>
              <label htmlFor="possible-date-3">
                Possible Date and Time
                <input
                  type="text"
                  name="possible-date-3"
                  id="possible-date-3"
                />
              </label>
            </fieldset>

            <button type="submit">Check Availability</button>
          </fieldset>
        </form>
      </main>
      <MainFooter />
    </div>
  );
}
