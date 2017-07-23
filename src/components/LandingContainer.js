import React, { Component } from 'react';

// Import request module
import axios from 'axios';

// Import components
 import HeroImage from '../components/HeroImage';
 import CampaignOverview from '../components/CampaignOverview';

// Import styles
import '../styles/LandingContainer.css';

class LandingContainer extends Component {
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

        // Set initial state
        this.state = {
            loading: false,
            heading: "",
            description: "",
            image: "",
            pleged: 0,
            of: 0,
            backers: 0,
            daysLeft: 0,
            location: ""
        }

        // Bind function to refer to component
        this.getData = this.getData.bind(this);
    }

    // Fetch data when the component is added
    componentDidMount() {
        this.getData().then(_ => {
            this.interval = setInterval(this.getData, 60000);
        });
    }

    // Fetch new data
    getData() {
        // Tell the Widget component we're currently loading
        this.setState({ loading: true });

        // Fetch data
        return axios.get(this.props.href)
            .then(resp => {
                this.setState({
                    loading: false,
                    heading: resp.data.heading,
                    description: resp.data.description,
                    image: resp.data.image,
                    progress: resp.data.progress,
                    pleged: resp.data.pleged,
                    of: resp.data.of,
                    backers: resp.data.backers,
                    daysLeft: resp.data.daysLeft,
                    location: resp.data.location,
                });
            })
    }

    render() {
        return (
            <section className="landingContainer"
                    style={ this.spanStyles }>

                <div className="headerWrapper">
                    <h1>
                        {this.state.heading}
                    </h1>
                    <div className="campaignDescription">
                        {this.state.description}
                    </div>
                </div>

                <HeroImage
                    image={this.state.image}
                    altText="..."
                    location={this.state.location} />

                <CampaignOverview
                    progress={this.state.progress}
                    pleged={this.state.pleged}
                    of={this.state.of}
                    backers={this.state.backers}
                    daysLeft={this.state.daysLeft}/>

            </section>
        );
    }
}

// Provide default settings for when they aren't supplied
LandingContainer.defaultProps = {
    colspan: 4,
    rowspan: 2
}

// Enforce the type of props to send to this component
LandingContainer.propTypes = {
    href: React.PropTypes.string.isRequired,
    colspan: React.PropTypes.number,
    rowspan: React.PropTypes.number,
}

export default LandingContainer;
