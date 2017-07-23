import React, { Component } from 'react';

//Import styling
import '../styles/Button.css';

class Button extends Component {

    checkForIcon() {
        if(this.props.icon){
            let iconName = "fa fa-" + this.props.icon;
            return(
                <i className={iconName} aria-hidden="true"></i>
            )
        }
    }

    render() {
        return (
            <button className={this.props.type + " " + this.props.size}>
                {this.checkForIcon()}{this.props.label}
            </button>
        );
    }
}

// Enforce the type of props to send to this component
Button.propTypes = {
    type: React.PropTypes.string,
    size:  React.PropTypes.string,
    label: React.PropTypes.string,
    width: React.PropTypes.number,
    rowspheightan: React.PropTypes.number,
    icon: React.PropTypes.string,
}


export default Button;
