import React from "react";

class AddMeatForm extends React.Component {
    nameRef = React.createRef();
    priceRef = React.createRef();
    statusRef = React.createRef();
    descRef = React.createRef();
    imageRef = React.createRef();

    createMeat = event => {
        // 1.  stop the form from submitting
        event.preventDefault();
        const meat = {
            name: this.nameRef.current.value,
            price: parseFloat(this.priceRef.current.value),
            status: this.statusRef.current.value,
            desc: this.descRef.current.value,
            image: this.imageRef.current.value
        };
        this.props.addMeat(meat);
        // refresh the form
        event.currentTarget.reset();
    };
    render() {
        return (
            <form className="meat-edit" onSubmit={this.createMeat}>
                <input name="name" ref={this.nameRef} type="text" placeholder="Name" />
                <input
                    name="price"
                    ref={this.priceRef}
                    type="text"
                    placeholder="Price"
                />
                <select name="status" ref={this.statusRef}>
                    <option value="available">Fresh!</option>
                    <option value="unavailable">Sold Out!</option>
                </select>

                <textarea name="desc" ref={this.descRef} placeholder="Desc" />
                <input
                    name="image"
                    ref={this.imageRef}
                    type="text"
                    placeholder="Image"
                />
                <button type="submit">+ Add Meat</button>
            </form>
        );
    }
}

export default AddMeatForm;