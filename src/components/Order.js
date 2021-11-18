import React from "react";
import { formatPrice } from "../helpers";

class Order extends React.Component {
  renderOrder = key => {
    const meat = this.props.meats[key];
    const count = this.props.order[key];
    const isAvailable = meat.status === "available";
    if (!isAvailable) {
      return (
        <li key={key}>
          Sorry {meat ? meat.name : "meat"} is no longer available
        </li>
      );
    }
    return (
      <li key={key}>
        {count} lbs {meat.name}
        {formatPrice(count * meat.price)}
      </li>
    );
  };
  render() {
    const orderIds = Object.keys(this.props.order);
    const total = orderIds.reduce((prevTotal, key) => {
      const meat = this.props.meats[key];
      const count = this.props.order[key];
      const isAvailable = meat && meat.status === "available";
      if (isAvailable) {
        return prevTotal + count * meat.price;
      }
      return prevTotal;
    }, 0);
    return (
      <div className="order-wrap">
        <h2>Order</h2>
        <ul className="order">{orderIds.map(this.renderOrder)}</ul>
        <div className="total">
          Total:
          <strong>{formatPrice(total)}</strong>
        </div>
      </div>
    );
  }
}

export default Order;
