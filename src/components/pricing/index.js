import React, { Component } from 'react';
import MyButton from '../utils/MyButton';

import Zoom from 'react-reveal/Zoom';

class Pricing extends Component {

  state = {
    prices: [59.41, 154.00 ],
    positions: ['General', 'VIP'],
    desc: [
      "Entrada con acceso al recinto en zona general. Una vez dentro, no se permitirá la salida y la re-entrada, de tal manera que si decide abandonar el recinto, no podrá volver a acceder con la misma entrada.",
      "Una vez dentro, no se permitirá la salida y la re-entrada, de tal manera que si decide abandonar el recinto, no podrá volver a acceder con la misma entrada.",
    ],
    linkto: [
      'https://www.eventbrite.es/e/entradas-love-the-tuentis-festival-72938700617',
      'https://www.ticketmaster.es/event/love-the-tuentis-entradas/18979?eventId=18979',
    ],
    delay:[500, 0, 500]
  }

  showBoxes = () => (
    this.state.prices.map((price, i) => (
      <Zoom key={i} delay={this.state.delay[i]}>
        <div className="pricing_item">
          <div className="pricing_inner_wrapper">
            <div className="pricing_title">
              <span>${this.state.prices[i]}</span>
              <span>{this.state.positions[i]}</span>
            </div>
            <div className="pricing_description">
              {this.state.desc[i]}
            </div>
            <div className="pricing_buttons">
              <MyButton 
                text="Purchase"
                bck="#ffa800"
                color="#ffffff"
                link={this.state.linkto[i]}
              />
            </div>

          </div>
        </div>
      </Zoom>
    ))
  );

  render() {
    return (
      <div className="bck_black">
        <div className="center_wrapper pricing_section">
          <h2>Pricing</h2>

          <div className="pricing_wrapper">
            {this.showBoxes()}
          </div>

        </div>
        
      </div>
    );
  }
}

export default Pricing;