import React from "react";
import DATA from "../data.json";

export const MyContext = React.createContext();

class BookProvider extends React.Component {
  state = {
    Data: DATA
  };

  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state
        }}
      >
        {console.log(this.state)}
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export default BookProvider;
