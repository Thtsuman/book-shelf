import React from "react";

export const themeContext = React.createContext();

class ThemeProvider extends React.Component {
  state = {
    currentTheme: "red",
    dark: {
      navBgColor: "bg-gray-900",
      bgColor: "bg-gray-900",
      cardColor: "bg-gray-800",
      titleColor: "text-gray-300",
      subtitleColor: "text-blue-500",
      normalTextColor: "text-gray-600",
      btnColor: "bg-gray-900",
      hoverBtnColor: "bg-gray-700"
    },
    green: {
      navBgColor: "bg-green-500",
      bgColor: "bg-green-100",
      cardColor: "",
      titleColor: "text-gray-800",
      subtitleColor: "text-blue-500",
      normalTextColor: "text-gray-600",
      btnColor: "bg-green-600",
      hoverBtnColor: "bg-green-500"
    },
    red: {
      navBgColor: "bg-red-500",
      bgColor: "bg-blue-100",
      cardColor: "",
      titleColor: "text-gray-800",
      subtitleColor: "text-blue-500",
      normalTextColor: "text-gray-600",
      btnColor: "bg-red-600",
      hoverBtnColor: "bg-red-500"
    },
    blue: {
      navBgColor: "bg-blue-500",
      bgColor: "",
      cardColor: "bg-blue-100",
      titleColor: "text-gray-800",
      subtitleColor: "text-blue-500",
      normalTextColor: "text-gray-600",
      btnColor: "bg-blue-600",
      hoverBtnColor: "bg-blue-500"
    }
  };

  handleTheme = currentTheme => {
    const { ...currentAppliedTheme } = this.state;
    return currentAppliedTheme[currentTheme];
  };

  onChangeTheme = themeName => {
    this.setState({
      currentTheme: themeName
    });
  };

  render() {
    return (
      <themeContext.Provider
        value={{
          state: this.handleTheme(this.state.currentTheme),
          onChangeTheme: this.onChangeTheme
        }}
      >
        {this.props.children}
      </themeContext.Provider>
    );
  }
}

export default ThemeProvider;
