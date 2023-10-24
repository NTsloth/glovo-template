import React, { useState, useEffect } from "react";
import "./Sticky.css";
import styles from "./Main.module.css";

const Sticky = () => {
  const [currentLocation, setCurrentLocation] = useState("");
  const [isStickyHeader, setIsStickyHeader] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const handleScroll = (e) => {
    const header = document.querySelector(".header-section");
    const scrollTop = window.scrollY;
    setIsStickyHeader(scrollTop >= 250);
  };

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCurrentLocation(`${latitude}, ${longitude}`);
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported in this browser.");
    }
  };

  return (
    <>
      <header className={`header-section ${isStickyHeader ? "is-sticky" : ""}`}>
        <div className={styles.mainInputBtn}>
          <div className={styles.mainbtn}>
            <button>
              <i className="fa-solid fa-font-awesome"></i>
            </button>
          </div>
          <div className={styles.mainInput}>
            <input
              type="text"
              placeholder="შეიყვანე შენი მისამართი"
              value={currentLocation}
              onChange={(e) => setCurrentLocation(e.target.value)}
            />
          </div>
          <div className={styles.mainLocation}>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="33"
                height="32"
                fill="none"
              >
                <circle cx="16.5" cy="16" r="16" fill="#E9F8F5" />
                <g clipPath="url(#clip0_4333:7487)">
                  <path
                    fill="#00A082"
                    d="M8.814 15.571a.565.565 0 00.153 1.063l5.868 1.062 1.067 5.84a.567.567 0 00.56.464.569.569 0 00.509-.313 253.506 253.506 0 006.488-14.013.483.483 0 00-.643-.63A329.88 329.88 0 008.814 15.57z"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_4333:7487">
                    <path
                      fill="#fff"
                      d="M0 0h15v15H0z"
                      transform="translate(8.5 9)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <button onClick={getLocation}>Get Current Location</button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Sticky;
