import React from "react";
import { formatPrice } from "../helpers";

class Meat extends React.Component {
    render() {
        const { image, name, price, desc, status } = this.props.details;
        const isAvailable = status === "available";
        return (
            <li className="menu-meat">
                <img src={image} alt={name} />
                <h3 className="meat-name">
                    {name}
                    <span className="price">{formatPrice(price)}</span>
                </h3>
                <p>{desc}</p>
                <button
                    disabled={!isAvailable}
                    onClick={() => this.props.addToOrder(this.props.index)}
                >
                    {isAvailable ? "Add To Order" : "Sold Out!"}
                </button>
            </li>
        );
    }
}

export default Meat;