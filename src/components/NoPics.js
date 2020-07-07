import React from "react";

// Component for no images returned from API request
const NoPics = () => {
  return (
    <li className="not-found">
      <h3>No Results Found</h3>
      <p>Sorry. Your search did not return any results. Please try again.</p>
    </li>
  );
};

export default NoPics;