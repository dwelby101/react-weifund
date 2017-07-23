import React, { Component } from 'react';

// Import components
//import Loading from './Loading';

//Import styling
import '../styles/HeroImage.css';

class HeroImage extends Component {
    render() {
        return (
            <div className="heroWrapper">
                <img className="heroImage"src={this.props.image} alt={this.props.altTxt} />

                <div className="heroDescriptor">
                    <i className="fa fa-compass" aria-hidden="true"></i>
                    Projects we love
                </div>

                <div className="heroDescriptor">
                    <i className="fa fa-space-shuttle" aria-hidden="true"></i>
                    Product Design
                </div>

                <div className="heroDescriptor">
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                    Dubai, UAE
                </div>

            </div>
        );
    }
}

// Provide default settings for when they aren't supplied
HeroImage.defaultProps = {
    image: "loading-fallback",
    altTxt: "no image description available"
}

// Enforce the type of props to send to this component
HeroImage.propTypes = {
    image: React.PropTypes.string.isRequired,
    altTxt: React.PropTypes.string
}


export default HeroImage;
