import React from "react";
import AddMeatForm from "./AddMeatForm";

class Inventory extends React.Component {
  render() {
    return (
      <div className="inventory">
        <h2>Inventory</h2>
        <AddMeatForm addMeat={this.props.addMeat} />
        <button onClick={this.props.loadSampleMeats}>
          Load Sample Meats
        </button>
      </div>
    );
  }
}

export default Inventory;
