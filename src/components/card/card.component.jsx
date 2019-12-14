import React from "react";

import { themeContext } from "../../context/themeContext";

const Card = ({ name, description, tags, author, picUrl }) => {
  const listTags = tags.map((tag, key) => (
    <span
      key={key}
      className="inline-block bg-purple-600 rounded-full px-3 py-1 text-sm font-semibold text-gray-200 mr-2"
    >
      #{tag}
    </span>
  ));

  return (
    <div className="card px-2 sm:w-1/2 md:w-1/3 mb-3">
      <themeContext.Consumer>
        {({ state }) => (
          <div className={`rounded bg-gray-200 shadow ${state.cardColor}`}>
            <div className="md:flex-shrink p-5">
              <img
                className="rounded-lg shadow mx-auto h-40"
                src={picUrl}
                alt="Woman paying for a purchase"
              />
            </div>
            <div className="px-6 py-4">
              <div className={`${state.titleColor} font-bold text-xl`}>
                {name}
              </div>
              <div className={`${state.subtitleColor} font-bold text-md mb-2`}>
                by {author}
              </div>
              <p className={`${state.normalTextColor} text-md`}>
                {description.substr(0, 150)}...
              </p>
            </div>
            <div className="lg:flex justify-between">
              <div className="px-6 lg:py-4 pt-2">{listTags}</div>
              <div className="px-6 lg:py-4 py-4">
                <button
                  className={`w-full inline-block ${state.btnColor} hover:${state.hoverBtnColor} shadow-lg rounded-lg px-4 py-2 text-md font-semibold text-gray-200 mr-2`}
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
        )}
      </themeContext.Consumer>
    </div>
  );
};

export default Card;
