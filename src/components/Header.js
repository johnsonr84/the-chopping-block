import React from "react";
import PropTypes from "prop-types";

const Header = props => (
    <header className="top">
        <h1>
            Chopping
            <span className="ofThe">
                <span className="the">The</span>
            </span>
            Block
        </h1>
        <h3 className="tagline">
            <span>{props.tagline}</span>
        </h3>
    </header>
);

Header.propTypes = {
    tagline: PropTypes.string.isRequired
};

export default Header;
