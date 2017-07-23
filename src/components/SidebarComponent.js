import React, { Component } from 'react';


//Import styling
import '../styles/SidebarComponent.css';

class SidebarComponent extends Component {

    render() {
        // should bind click event to div for redirecting user to relevant page
        return (
            <div className="SidebarComponent">
                <h4>
                    {this.props.offerTitle}
                </h4>
                <p>
                    {this.props.offerData}
                </p>
                Offer ID:
                <b>
                    {this.props.offerID}
                </b>
            </div>
        );
    }
}

// Enforce the type of props to send to this component
SidebarComponent.propTypes = {
    offerTitle: React.PropTypes.string,   //--- should be required
    offerData: React.PropTypes.string,   //--- should be required
    offerID: React.PropTypes.number   //--- should be required
}

export default SidebarComponent;
