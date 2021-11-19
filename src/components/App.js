import React from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import sampleMeats from "../sample-meats";
import Meat from "./Meat";
import base from "../base";

class App extends React.Component {
    state = {
        meats: {},
        order: {}
    };

    static propTypes = {
        match: PropTypes.object
    };

    componentDidMount() {
        const { params } = this.props.match;
        // first reinstate our localStorage
        const localStorageRef = localStorage.getItem(params.storeId);
        if (localStorageRef) {
            this.setState({ order: JSON.parse(localStorageRef) });
        }

        this.ref = base.syncState(`${params.storeId}/meats`, {
            context: this,
            state: "meats"
        });
    }

    componentDidUpdate() {
        localStorage.setItem(
            this.props.match.params.storeId,
            JSON.stringify(this.state.order)
        );
    }

    componentWillUnmount() {
        base.removeBinding(this.ref);
    }

    addMeat = meat => {
        // 1. Take a copy of the existing state
        const meats = { ...this.state.meats };
        // 2. Add our new fish to that meats variable
        meats[`meat${Date.now()}`] = meat;
        // 3. Set the new meats object to state
        this.setState({ meats });
    };

    updateMeat = (key, updatedMeat) => {
        // 1. Take a copy of the current state
        const meats = { ...this.state.meats };
        // 2. Update that state
        meats[key] = updatedMeat;
        // 3. Set that to state
        this.setState({ meats });
    };

    deleteMeat = key => {
        // 1. take a copy of state
        const meats = { ...this.state.meats };
        // 2. update the state
        meats[key] = null;
        // 3.  update state
        this.setState({ meats });
    };

    loadSampleMeats = () => {
        this.setState({ meats: sampleMeats });
    };

    addToOrder = key => {
        // 1. take a copy of state
        const order = { ...this.state.order };
        // 2. Either add to the order, or update the number in our order
        order[key] = order[key] + 1 || 1;
        // 3. Call setState to update our state object
        this.setState({ order });
    };

    removeFromOrder = key => {
        // 1. take a copy of state
        const order = { ...this.state.order };
        // 2. remove that itemf from order
        delete order[key];
        // 3. Call setState to update our state object
        this.setState({ order });
    };

    render() {
        return (
            <div className="react-market-inventory">
                <div className="menu">
                    <Header tagline="Fresh Meat Market" />
                    <ul className="meats">
                        {Object.keys(this.state.meats).map(key => (
                            <Meat
                                key={key}
                                index={key}
                                details={this.state.meats[key]}
                                addToOrder={this.addToOrder}
                            />
                        ))}
                    </ul>
                </div>
                <Order
                    meats={this.state.meats}
                    order={this.state.order}
                    removeFromOrder={this.removeFromOrder}
                />
                <Inventory
                    addMeat={this.addMeat}
                    updateMeat={this.updateMeat}
                    deleteMeat={this.deleteMeat}
                    loadSampleMeats={this.loadSampleMeats}
                    meats={this.state.meats}
                    storeId={this.props.match.params.storeId}
                />
            </div>
        );
    }
}

export default App;
