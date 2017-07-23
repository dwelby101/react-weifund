import React, { Component } from 'react';

// Import request module
import axios from 'axios';

// Import components
import HeadNav from '../components/HeadNav';

class HeadNavContainer extends Component {
    constructor() {
        super();

        // Set initial state
        this.state = {
            loading: false,
            min: undefined,
            max: undefined,
            value: undefined
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
                    min: resp.data.min,
                    max: resp.data.max,
                    value: resp.data.value
                });
            })
    }

    render() {
        return (
            //render the header navigation component
            <HeadNav></HeadNav>
        );
    }
}

// Enforce the type of props to send to this component
HeadNavContainer.propTypes = {
    heading: React.PropTypes.string,
    colspan: React.PropTypes.number,
    rowspan: React.PropTypes.number,
    href: React.PropTypes.string.isRequired
}

export default HeadNavContainer;
