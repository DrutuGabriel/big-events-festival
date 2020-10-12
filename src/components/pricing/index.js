import React, { Component } from 'react';
import MyButton from '../utils/MyButton';

import Zoom from 'react-reveal/Zoom';

class Pricing extends Component {

  state = {
    prices: [100, 150, 250],
    positions: ['Balcony', 'Medium', 'Star'],
    desc: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    ],
    linkto: [
      'https://devdare.com/sales/balcony',
      'https://devdare.com/sales/medium',
      'https://devdare.com/sales/star',
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