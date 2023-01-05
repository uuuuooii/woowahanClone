import React from "react";
import Header from "../../src/presenter/header/index";

import News from "../../src/presenter/newsRoom";
import Footer from "../../src/presenter/footer/index";

const NewsRoom = () => {
  return (
    <>
      <Header />
      <News />
      <Footer />
    </>
  );
};

export default NewsRoom;
