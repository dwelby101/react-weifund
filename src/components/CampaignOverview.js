import React, { Component } from 'react';

// Import components
import Progress from '../components/Progress';
import Button from '../components/Button';

//Import styling
import '../styles/CampaignOverview.css';

class CampaignOverview extends Component {
    render() {
        return (
            <div className="campaignOverview">

                <Progress min={0} max={100} value={this.props.progress} />

                <div className="valueWrapper">
                    <div className="plegedValue">
                        ETH {this.props.pleged}
                    </div>
                    <div className="valueDesc">
                        pleged of ETH {this.props.of} goal.
                    </div>
                </div>


                <div className="valueWrapper">
                    <div className="value">
                        {this.props.backers}
                        <br/>
                    </div>
                    <div className="valueDesc">
                        backers
                    </div>
                </div>

                <div className="valueWrapper">
                    <div className="value">
                        {this.props.daysLeft}
                    </div>
                    <div className="valueDesc">
                        days left
                    </div>
                </div>

                <Button
                    size="large"
                    type="green"
                    label="Back this project"/>

                <div>
                    <Button
                        size="medium"
                        type="grey"
                        label="Remind me"
                        icon="heart"/>

                    <Button
                        size="medium"
                        type="grey"
                        label="Share"
                        icon="share"/>
                </div>
            </div>
        );
    }
}

// Enforce the type of props to send to this component
CampaignOverview.propTypes = {
    progress: React.PropTypes.number,
    pleged: React.PropTypes.number,
    of: React.PropTypes.number,
    backers: React.PropTypes.number,
    daysLeft: React.PropTypes.number
}

export default CampaignOverview;
