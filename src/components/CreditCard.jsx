import React, { Component } from "react";
import { VisaCreditCard as VisaCard } from "react-fancy-visa-card";

class CreditCard extends Component {
  pay = (e, data) => {
    console.log(data);
  };

  render() {
    return (
      <div className="CreditCard">
        <VisaCard onSubmit={this.pay} />
      </div>
    );
  }
}

export default CreditCard;
