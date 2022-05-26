import React from "react";

const HomePage = ({ title }) => {
  document.title = title + "Home";
  return (
    <>
      <div>Home Page</div>
    </>
  );
};

export default HomePage;
