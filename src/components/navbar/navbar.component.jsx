import React from "react";

import { themeContext } from "../../context/themeContext";

class Navbar extends React.Component {
  state = {
    isOpen: false
  };

  changeIsOpenHandler = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <div className="navbar sticky top-0 w-full ">
        <themeContext.Consumer>
          {({ state }) => (
            <nav
              className={` ${state.navBgColor} items-center justify-between flex-wrap p-1 shadow-xl`}
            >
              <div className="container flex p-3 md:p-1 mx-auto justify-between flex-wrap">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                  <span className="font-semibold text-xl tracking-tight">
                    Book Shelf
                  </span>
                </div>
                <div className="block lg:hidden">
                  <button
                    onClick={() => this.changeIsOpenHandler()}
                    className="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-gray-200"
                  >
                    <svg
                      className="fill-current h-3 w-3"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Menu</title>
                      <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                  </button>
                </div>
                <div
                  className={`${
                    this.state.isOpen ? "block" : "hidden"
                  } w-full flex-grow lg:flex lg:items-center lg:w-auto my-5`}
                >
                  <div className="text-sm lg:flex-grow">
                    <a
                      href="#about"
                      className="block font-bold lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-4"
                    >
                      About Us
                    </a>
                    <a
                      href="#admin"
                      className="block font-bold lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-4"
                    >
                      Admin
                    </a>
                  </div>
                </div>
              </div>
            </nav>
          )}
        </themeContext.Consumer>
      </div>
    );
  }
}

export default Navbar;
