import React from "react";
import PropTypes from "prop-types";

class EditMeatForm extends React.Component {
    static propTypes = {
        meat: PropTypes.shape({
            image: PropTypes.string,
            name: PropTypes.string,
            desc: PropTypes.string,
            status: PropTypes.string,
            price: PropTypes.number
        }),
        index: PropTypes.string,
        updateFish: PropTypes.func
    };
    handleChange = event => {
        console.log(event.currentTarget.value);
        // update that fish
        // 1. Take a copy of the curernt fish
        const updatedMeat = {
            ...this.props.meat,
            [event.currentTarget.name]:
                event.currentTarget.name === 'price'
                    ? parseFloat(event.currentTarget.value)
                    : event.currentTarget.value
        };
        this.props.updateMeat(this.props.index, updatedMeat);
    };
    render() {
        return (
            <div className="meat-edit">
                <input
                    type="text"
                    name="name"
                    onChange={this.handleChange}
                    value={this.props.meat.name}
                />
                <input
                    type="text"
                    name="price"
                    onChange={this.handleChange}
                    value={this.props.meat.price}
                />
                <select
                    type="text"
                    name="status"
                    onChange={this.handleChange}
                    value={this.props.meat.status}
                >
                    <option value="available">Fresh!</option>
                    <option value="unavailable">Sold Out!</option>
                </select>
                <textarea
                    name="desc"
                    onChange={this.handleChange}
                    value={this.props.meat.desc}
                />
                <input
                    type="text"
                    name="image"
                    onChange={this.handleChange}
                    value={this.props.meat.image}
                />
                <button onClick={() => this.props.deleteMeat(this.props.index)}>
                    Remove Meat
                </button>
            </div>
        );
    }
}

export default EditMeatForm;

