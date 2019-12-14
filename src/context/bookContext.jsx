import React from "react";
import DATA from "../data.json";

export const bookContext = React.createContext();

class BookProvider extends React.Component {
  state = {
    Data: DATA
  };

  render() {
    return (
      <bookContext.Provider
        value={{
          state: this.state
        }}
      >
        {this.props.children}
      </bookContext.Provider>
    );
  }
}

export default BookProvider;
