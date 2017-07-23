import React, { Component } from 'react';

// Import components


//Import styling
import '../styles/HeadNav.css';

//Import Logo
import logo from '../assets/weifund.png';

class HeadNav extends Component {

    render() {
        return (
            <div className="headNav">
                <img src={logo} alt="logo"/>
            </div>
        );
    }
}

// Enforce the type of props to send to this component
HeadNav.propTypes = {
    heading: React.PropTypes.string,
}

export default HeadNav;
