import "./App.css";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";
import React, { useState } from "react";

function App() {
  const [cards, setCards] = useState([
    {
      cardImg: "",
      cardTitle: "Title",
      cardSubTitle: "SubTitle",
      cardText: "CardText",
    },
  ]);
  function addCard() {
    const tempCards = cards;
    setCards([
      ...tempCards,
      {
        cardImg: "",
        cardTitle: "Title",
        cardSubTitle: "SubTitle",
        cardText: "CardText",
      },
    ]);
  }
  return (
    <div className="App">
      <div className="trial">
        <div className="container">
          <div className="row">
            <div className="col-3">
              <h1>Kart Ekle!</h1>
              <button onClick={() => addCard()}>Ekle</button>
            </div>
            <div className="col-9">
              <div className="p-2 card-area card-area d-inline-flex ">
                {cards.map((item) => (
                  <Card id="Card">
                    <CardImg
                      alt="Card image cap"
                      src="https://picsum.photos/318/180"
                      top
                      width="100%"
                    />
                    <CardBody>
                      <CardTitle tag="h5">Manzara Resmi</CardTitle>
                      <CardSubtitle className="mb-2 text-muted" tag="h6">
                        Manzara Resmi
                      </CardSubtitle>
                      <CardText>Manzara Resmi</CardText>
                      <Button>Button</Button>
                    </CardBody>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
