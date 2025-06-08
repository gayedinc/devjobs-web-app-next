"use client";
import { useState, useLayoutEffect, useEffect } from "react";

export default function SearchForm({ jobs, onFilter }) {
  const [searchText, setSearchText] = useState("");
  const [location, setLocation] = useState("");
  const [fullTimeOnly, setFullTimeOnly] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useLayoutEffect(() => {
    const checkScreen = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 767);
      setIsTablet(width > 767 && width <= 1279);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  useEffect(() => {
    const filtered = jobs.filter((job) => {
      const textMatch =
        job.position.toLowerCase().includes(searchText.toLowerCase()) ||
        job.company.toLowerCase().includes(searchText.toLowerCase());

      const locationMatch = location
        ? job.location.toLowerCase().includes(location.toLowerCase())
        : true;

      const fullTimeMatch = fullTimeOnly
        ? job.contract.toLowerCase() === "full time"
        : true;

      return textMatch && locationMatch && fullTimeMatch;
    });

    onFilter(filtered);
  }, [searchText, location, fullTimeOnly, jobs]);

  return (
    <section className="search-area-container">
      <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
        {/* Mobile */}
        {isMobile ? (
          <>
            <input
              type="text"
              placeholder="Filter by title..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />

            <button type="button" onClick={() => setShowDialog(true)}>
              <img src="/assets/img/boiler-icon.svg" alt="filter icon" />
            </button>

            <button type="submit">
              <img
                src="/assets/logos/white-search-mobile.svg"
                alt="search icon"
              />
            </button>

            {showDialog && (
              <div
                className="modal-overlay"
                onClick={() => setShowDialog(false)}
              >
                <div
                  className="modal-content"
                  onClick={(e) => e.stopPropagation()}
                >
                  <input
                    type="text"
                    placeholder="Filter by location..."
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />

                  <label className="checkbox-label" htmlFor="mobile-fulltime">
                    <input
                      id="mobile-fulltime"
                      type="checkbox"
                      checked={fullTimeOnly}
                      onChange={() => setFullTimeOnly((prev) => !prev)}
                    />
                    <span>Full Time Only</span>
                  </label>

                  <button
                    type="submit"
                    onClick={() => setShowDialog(false)}
                  >
                    Search
                  </button>
                </div>
              </div>
            )}
          </>
        ) : (
          // Tablet & Desktop
          <div className="tablet-desktop-search">
            <div className="inputs-wrapper">
              <input
                type="text"
                placeholder={
                  isTablet
                    ? "Filter by title..."
                    : "Filter by title, companies, expertise…"
                }
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />

              <input
                type="text"
                placeholder="Filter by location..."
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            <div className="options-wrapper">
              <label className="checkbox-label" htmlFor="desktop-fulltime">
                <input
                  id="desktop-fulltime"
                  type="checkbox"
                  checked={fullTimeOnly}
                  onChange={() => setFullTimeOnly((prev) => !prev)}
                />
                <span>{isTablet ? "Full Time" : "Full Time Only"}</span>
              </label>

              <button type="submit" className="searchBtn">Search</button>
            </div>
          </div>

        )}
      </form>
    </section>
  );
}