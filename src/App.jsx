import React from "react";
import Navbar from "./components/navbar/navbar.component";
import Cards from "./components/cards/cards.components";
import BookProvider from "./context/bookContext";
import ThemeProvider from "./context/themeContext";

import { themeContext } from "./context/themeContext";

class App extends React.Component {
  render() {
    return (
      <BookProvider>
        <ThemeProvider>
          <themeContext.Consumer>
            {({ state, onChangeTheme }) => {
              return (
                <React.Fragment>
                  <div className={`app ${state.bgColor}`}>
                    <Navbar />
                    <button
                      className={`inline-block bg-gray-900 hover:bg-gray-700 shadow-lg rounded-lg px-4 py-2 text-md font-semibold text-gray-200 mr-2`}
                      onClick={() => onChangeTheme("dark")}
                    >
                      Dark
                    </button>
                    <button
                      className={`inline-block bg-green-600 hover:bg-green-500 shadow-lg rounded-lg px-4 py-2 text-md font-semibold text-gray-200 mr-2`}
                      onClick={() => onChangeTheme("green")}
                    >
                      Green
                    </button>
                    <div className="container mx-auto">
                      <Cards />
                    </div>
                  </div>
                </React.Fragment>
              );
            }}
          </themeContext.Consumer>
        </ThemeProvider>
      </BookProvider>
    );
  }
}

export default App;
