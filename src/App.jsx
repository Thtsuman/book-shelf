import React from "react";
import Navbar from "./components/navbar/navbar.component";
import Cards from "./components/cards/cards.components";
import BookProvider from "./context/bookContext";

class App extends React.Component {
  render() {
    return (
      <BookProvider>
        <div className="app">
          <Navbar />
          <div className="container mx-auto">
            <Cards />
          </div>
        </div>
      </BookProvider>
    );
  }
}

export default App;
