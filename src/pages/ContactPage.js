import React from "react";

const ContactPage = ({ title }) => {
  document.title = "Contact" + title;
  document.documentElement.scrollTo(0, 0);
  return (
    <>
      <div>a</div>
    </>
  );
};

export default ContactPage;
