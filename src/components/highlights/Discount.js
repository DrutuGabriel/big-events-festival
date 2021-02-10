import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

import MyButton from "../utils/MyButton";

class Discount extends Component {
  state = {
    discountStart: 0,
    discountEnd: 69,
  };

  percentage = () => {
    if (this.state.discountStart < this.state.discountEnd) {
      this.setState({
        discountStart: this.state.discountStart + 1,
      });
    }
  };

  componentDidUpdate() {
    setTimeout(() => {
      this.percentage();
    }, 30);
  }

  render() {
    return (
      <div className="center_wrapper">
        <div className="discount_wrapper">
          <Fade
            onReveal={() => {
              this.percentage();
            }}
          >
            <div className="discount_percentage">
              <span>{this.state.discountStart}+</span>
              <span>ARTISTS</span>
            </div>
          </Fade>

          <Slide right>
            <div className="discount_description">
              <h3>Escenario Dance</h3>
              <p>
                Regi from Milk Inc, INNA, Kate Ryan, Cascada, Lasgo, Jessy, Jan
                Wayne, Trouser Enthusiast, Fragma, Warp Brothers, Astroline, La
                Luna vs Dee Dee, Spacio ft Rafa Ruiz, Lazzard, Paul Droid, Dj
                Marta, The Kid ft Noemy, Eva Marti, Marian Dacal, Clublanders y
                Head Hornys & Miguel Serna y Jumper Brothers. Y muchos mas de
                Escenario Pop y Playa!
              </p>

              <MyButton
                text="Purchase tickets"
                bck="#ffa800"
                color="#ffffff"
                link="https://www.eventbrite.es/e/entradas-love-the-tuentis-festival-72938700617"
              />
            </div>
          </Slide>
        </div>
      </div>
    );
  }
}

export default Discount;
