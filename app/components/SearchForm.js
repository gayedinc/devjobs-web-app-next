import { useState, useEffect } from "react";

export default function SearchForm({ jobs, onFilter }) {
  const [searchText, setSearchText] = useState("");
  const [location, setLocation] = useState("");
  const [fullTimeOnly, setFullTimeOnly] = useState(false);
  const [showDialog, setShowDialog] = useState(false);

  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 767);
      setIsTablet(width > 767 && width <= 1024);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();

    const filtered = jobs.filter((job) => {
      const textMatch =
        job.position.toLowerCase().includes(searchText.toLowerCase()) ||
        job.company.toLowerCase().includes(searchText.toLowerCase());
      const locationMatch = location
        ? job.location.toLowerCase().includes(location.toLowerCase())
        : true;
      const fullTimeMatch = fullTimeOnly
        ? job.contract === "Full Time"
        : true;

      return textMatch && locationMatch && fullTimeMatch;
    });

    onFilter(filtered);
  };


  return (
    <section className="search-area-container">
      <form className="searchForm" onSubmit={handleSearch}>
        {/* Mobile */}
        {isMobile && (
          <>
            <input
              type="text"
              placeholder="Enter job description..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button type="button" onClick={() => setShowDialog(true)}>
              <img src="/assets/img/boiler-icon.svg" alt="filter icon" />
            </button>
            <button type="submit">
              <img src="/assets/logos/white-search-mobile.svg" alt="search" />
            </button>

            {/* Modal Dialog */}
            {isMobile && showDialog && (
              <div className="modal-overlay" onClick={() => setShowDialog(false)}>
                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                  <input
                    type="text"
                    placeholder="Filter by location…"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                  <label>
                    <input
                      type="checkbox"
                      checked={fullTimeOnly}
                      onChange={() => setFullTimeOnly((prev) => !prev)}
                    />
                    <span>Full Time Only</span>
                  </label>
                  <button onClick={handleSearch}>Search</button>
                  <button onClick={() => setShowDialog(false)}>Close</button>
                </div>
              </div>
            )}
          </>
        )}

        {/* Tablet & Desktop */}
        {!isMobile && (
          <>
            <input
              type="text"
              placeholder="Filter by title, companies, expertise…"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <input
              type="text"
              placeholder="Filter by location..."
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <label>
              <input
                type="checkbox"
                checked={fullTimeOnly}
                onChange={() => setFullTimeOnly((v) => !v)}
              />
              {isTablet ? "Full Time" : "Full Time Only"}
            </label>
            <button type="submit">Search</button>
          </>
        )}
      </form>
    </section>
  );
}