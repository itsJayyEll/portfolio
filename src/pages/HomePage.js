import React from "react";

const HomePage = ({ title }) => {
  document.title = title + "Home";
  return (
    <>
      <div className="mx-8 flex jusitfy-center">
        <div>Home Page</div>
      </div>
    </>
  );
};

export default HomePage;
