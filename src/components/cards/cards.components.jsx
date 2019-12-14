import React from "react";
import Card from "../card/card.component";
import { bookContext } from "../../context/bookContext";

class Cards extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="cards-section my-1 py-6 flex -mx-2 mx-auto flex-wrap">
          <bookContext.Consumer>
            {({ state }) => (
              <React.Fragment>
                {state.Data.books.map(book => (
                  <Card key={book.id} {...book} />
                ))}
              </React.Fragment>
            )}
          </bookContext.Consumer>
        </div>
      </React.Fragment>
    );
  }
}

export default Cards;
