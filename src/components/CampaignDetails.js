import React, { Component } from 'react';

// Import components
import VideoPlayer from './VideoPlayer';



//Import styling
import '../styles/CampaignDetails.css';

class CampaignDetails extends Component {

    //TO DO: import all campaign data via a uniquie api call specifying campaign ID which would return
    //          a stabdardised body of JDON which could be used to display in the campaign details

    //TO DO: Create an animated (throbbing) loader notifying user content is loading and removing jank from late-loaded content

    render() {
        return (
            <div className="campaignDetails">
                <h2>
                    About this project
                </h2>

                <h3>
                    OUR STORY
                </h3>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500 s , when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>

                <h3>
                    VIDEO
                </h3>
                <div className="campainDetailsVideo">
                    <VideoPlayer
                        id={105917961}
                        type='vimeo' />
                </div>

                <h3>
                    OUR RANGE
                </h3>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500 s , when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>

                <h3>
                    THE PRODUCT
                </h3>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500 s , when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>

                <h3>
                    THE GIFTPACK
                </h3>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500 s , when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>
        );
    }
}

// Provide default settings for when they aren't supplied
CampaignDetails.defaultProps = {
    heading: "Unnamed Widget",
    colspan: 1,
    rowspan: 1
}

// Enforce the type of props to send to this component
CampaignDetails.propTypes = {
    heading: React.PropTypes.string,
    colspan: React.PropTypes.number,
    rowspan: React.PropTypes.number
}


export default CampaignDetails;
