import React, { Component } from 'react';

// Import request module
// import axios from 'axios';

// Import components
import Tabs from '../components/Tabs';
import Tab from '../components/Tab';
import CampaignDetails from '../components/CampaignDetails';
import FAQ from '../components/FAQ';
import Updates from '../components/Updates';
import Comments from '../components/Comments';
import Community from '../components/Community';


class TabContainer extends Component {
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
        return (
            <section style={ this.spanStyles }>
                    <Tabs>

                      <Tab iconClassName={'fa fa-flag'}
                           linkClassName={'custom-link'}
                           label={'Campaign'}>
                           <CampaignDetails></CampaignDetails>
                      </Tab>

                      <Tab iconClassName={'fa fa-question'}
                           linkClassName={'custom-link'}
                           label={'FAQ'}>
                           <FAQ></FAQ>
                      </Tab>

                      <Tab iconClassName={'fa fa-newspaper-o'}
                           linkClassName={'custom-link'}
                           label={'Updates'}>
                           <Updates></Updates>
                      </Tab>

                      <Tab iconClassName={'fa fa-comments-o'}
                           linkClassName={'custom-link'}
                           label={'Comments'}>
                           <Comments></Comments>
                      </Tab>

                      <Tab iconClassName={'fa fa-user-circle-o'}
                           linkClassName={'custom-link'}
                           label={'Community'}>
                           <Community></Community>
                      </Tab>

                    </Tabs>
            </section>
        );
    }
}

// Provide default settings for when they aren't supplied
TabContainer.defaultProps = {
    colspan: 4,
    rowspan: 2
}

// Enforce the type of props to send to this component
TabContainer.propTypes = {
    href: React.PropTypes.string,   //--- should be required
    colspan: React.PropTypes.number,
    rowspan: React.PropTypes.number,
}

export default TabContainer;
