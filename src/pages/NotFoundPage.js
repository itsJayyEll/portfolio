import React from "react";

const NotFoundPage = ({ title }) => {
  document.title = title + "404 Not Found";
  return (
    <>
      <div>404</div>
    </>
  );
};

export default NotFoundPage;
