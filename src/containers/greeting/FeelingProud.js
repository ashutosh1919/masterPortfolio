import React, { Component } from "react";

class FeelingProud extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div>
        {/* Image can be styled according to the theme */}
        <img
          src="https://assets.classicfm.com/2012/24/andrei-cozlac-1339413861-view-0.jpg"
          alt="Feeling Proud"
          style={{ theme }}
        />
      </div>
    );
  }
}

export default FeelingProud;
