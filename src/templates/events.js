import React from "react";
import { graphql } from "gatsby";

import MainHeader from "../components/MainHeader";
import MainFooter from "../components/MainFooter";
import "./events.scss";

function presentEvents(events) {
  if (events) {
    events = events.filter((event) => event.date !== "no more events");
  }
  if (!events || events.length === 0) {
    return <h1>No Events Currently Scheduled</h1>;
  }
  return events.map((event) => {
    return (
      <aside key="event.id">
        <h1>{`${event.date}, ${event.time}`}</h1>
        <p className="description">{event.description}</p>
        <p className="location">{event.location}</p>
        <p className="public">
          {event.public === "yes" ? "Public" : "Private"}
        </p>
      </aside>
    );
  });
}

function Events({ data }) {
  const { pastEvents, events } = data;
  return (
    <div className="container">
      <MainHeader barQuote="Something wise about events" />
      <main className="events">
        <section className="upcoming-events">
          <h1>Upcoming Events</h1>
          <article>{presentEvents(events.upcoming)}</article>
        </section>
        <section className="past-events">
          <h1>Past Notable Events</h1>
          <div dangerouslySetInnerHTML={{ __html: pastEvents.html }}></div>
        </section>
      </main>
      <MainFooter />
    </div>
  );
}

export default Events;

export const pageQuery = graphql`
  {
    events: allUpcomingEventsCsv {
      upcoming: nodes {
        id
        date
        time
        description
        location
        public
      }
    }

    pastEvents: markdownRemark(frontmatter: { slug: { eq: "past-events" } }) {
      html
    }
  }
`;
