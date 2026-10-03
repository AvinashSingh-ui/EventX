import { useMemo, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilter,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import events from "../data/data";
import EventCard from "../components/EventCard";
import "./Events.css";

function Events() {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");

  const categories = [
    "All",
    "Workshops",
    "Conferences",
    "Meetups",
  ];

  const filteredEvents = useMemo(() => {
    const query = search.toLowerCase().trim();

    return events.filter((event) => {
      const matchesCategory =
        category === "All" || event.category === category;

      const matchesSearch =
        !query ||
        event.title.toLowerCase().includes(query) ||
        event.location.toLowerCase().includes(query) ||
        event.organizer.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [category, search]);

  return (
    <section className="events-page">
      <div className="events-heading">
        <div>
          <span className="section-label">DISCOVER</span>
          <h1>Find Your Next Event</h1>
          <p>
            Explore opportunities, workshops, conferences and
            communities.
          </p>
        </div>

        <div className="events-count">
          <strong>{filteredEvents.length}</strong>
          <span>Events found</span>
        </div>
      </div>

      <div className="event-toolbar">
        <div className="search-box">
          <FontAwesomeIcon icon={faMagnifyingGlass} />

          <input
            type="text"
            placeholder="Search events, cities or organizers..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>

        <div className="filter-title">
          <FontAwesomeIcon icon={faFilter} />
          Filter
        </div>

        <div className="category-filters">
          {categories.map((item) => (
            <button
              key={item}
              className={
                category === item
                  ? "category-filter selected"
                  : "category-filter"
              }
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {filteredEvents.length > 0 ? (
        <div className="events-grid">
          {filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      ) : (
        <div className="no-events">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <h2>No events found</h2>
          <p>Try another search or category.</p>
        </div>
      )}
    </section>
  );
}

export default Events;