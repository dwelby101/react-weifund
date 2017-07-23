import React, { Component } from 'react';

//Import styling
import '../styles/Tab.css';

class Tab extends Component {

    constructor(props, context) {
        super(props, context);
        this.handleTabClick = this.handleTabClick.bind(this);
    }

    handleTabClick(event) {
        event.preventDefault();
        this.props.onClick(this.props.tabIndex);
    }

    render() {
        return (
              <li className="tab">
                    <a className={`tab-link ${this.props.linkClassName} ${this.props.isActive ? 'active' : ''}`}
                       onClick={this.handleTabClick}>
                       <i className={`tab-icon ${this.props.iconClassName}`}/>
                       {this.props.label}
                    </a>
              </li>
        );
    }
}

Tab.propTypes = {
  onClick      : React.PropTypes.func,
  tabIndex     : React.PropTypes.number,
  isActive     : React.PropTypes.bool,
  label        : React.PropTypes.string,
  iconClassName: React.PropTypes.string,
  linkClassName: React.PropTypes.string
};


export default Tab;
