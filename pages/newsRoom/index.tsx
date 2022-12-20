import React from "react";
import Header from "../../src/presenter/header/index";
import Footer from "../../src/presenter/footer/index";
import News from "../../src/presenter/newsRoom";

const NewsRoom = () => {
  return (
    <>
      <Header />
      <News />
      {/* <Footer /> */}
    </>
  );
};

export default NewsRoom;
