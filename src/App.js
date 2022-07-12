import React, { Fragment } from "react";

import Header from "./components/Header";
import Container from "./components/Container";
import BookContainer from "./components/Products/MainContainer";

const App = () => {
  return (
    <Fragment>
      <Header />
      <Container>
        <BookContainer />
      </Container>
    </Fragment>
  );
};

export default App;
