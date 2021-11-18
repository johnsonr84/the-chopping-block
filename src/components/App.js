import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import sampleMeats from "../sample-meats";
import Meat from "./Meat";

class App extends React.Component {
    state = {
        meats: {},
        order: {}
    };

    componentDidMount() {
        const { params } = this.props.match;
        // first reinstate our localStorage
        const localStorageRef = localStorage.getItem(params.storeId);
        if (localStorageRef) {
            this.setState({ order: JSON.parse(localStorageRef) });
        }


    }

    componentDidUpdate() {
        console.log(this.state.order);
        localStorage.setItem(
            this.props.match.params.storeId,
            JSON.stringify(this.state.order)
        );
    }



    addMeat = meat => {
        // 1. Take a copy of the existing state
        const meats = { ...this.state.meats };
        // 2. Add our new meat to that meats variable
        meats[`meat${Date.now()}`] = meat;
        // 3. Set the new meats object to state
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

    render() {
        return (
            <div className="react-market-inventory">
                <div className="menu">
                    <Header tagline="Your Fresh Meat Market" />
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
                <Order meats={this.state.meats} order={this.state.order} />
                <Inventory
                    addMeat={this.addMeat}
                    loadSampleMeats={this.loadSampleMeats}
                />
            </div>
        );
    }
}

export default App;