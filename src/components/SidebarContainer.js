import React, { Component } from 'react';

// Import request module
//import axios from 'axios';

// Import components
import SidebarComponent from '../components/SidebarComponent'


class SidebarContainer extends Component {
    constructor(props) {
        super(props);

        // Create inline styles to make grid elements span multiple rows/columns
        this.spanStyles = {};

        if (props.colspan !== 1) {
          this.spanStyles.gridColumn
          = `span ${props.colspan}`;
        }
        if (props.rowspan !== 1) {
          this.spanStyles.gridRow
          = `span ${props.rowspan}`;
        }

        // Bind function to refer to component
        this.getData = this.getData.bind(this);
    }

    // Fetch data when the component is added
    componentDidMount() {
        //TO DO
    }

    // Fetch new data
    getData() {
        // 1) Tell the component we're currently loading
        // 2) Once the data is recieved, add it to the props of the relevant data
        // 3) Remove the loader
    }

    render() {

        var divStyle = {
            color: '#2C3539'
        };

        //inner components should be looped based on server response
        return (
            <section style={ this.spanStyles }>
                <h3 style={divStyle}>
                    Support this project
                </h3>
                <SidebarComponent
                    offerTitle="Offer 1"
                    offerData="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
                    offerID={123}
                ></SidebarComponent>
                <SidebarComponent
                    offerTitle="Offer 2"
                    offerData="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
                    offerID={456}
                ></SidebarComponent>
                <SidebarComponent
                    offerTitle="Offer 3"
                    offerData="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
                    offerID={789}
                ></SidebarComponent>
            </section>
        );
    }
}

// Provide default settings for when they aren't supplied
SidebarContainer.defaultProps = {
    colspan: 1,
    rowspan: 2
}

// Enforce the type of props to send to this component
SidebarContainer.propTypes = {
    href: React.PropTypes.string,   //--- should be required - contains id of campaign to load relevant info from server
    colspan: React.PropTypes.number,
    rowspan: React.PropTypes.number,
}

export default SidebarContainer;
