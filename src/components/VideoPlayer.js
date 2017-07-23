import React, { Component } from 'react';

// Import components


//Import styling
import '../styles/VideoPlayer.css';

class VideoPlayer extends Component {

    renderVideoPlayer() {
        if(this.props.type === 'youtube' && this.props.id){
            return(
                <iframe
                    src={"https://www.youtube.com/embed/" + this.props.id}
                    width="560"
                    height="315"
                    frameborder="0"
                    allowfullscreen>
                </iframe>
            )
        }
        else if(this.props.type === 'vimeo' && this.props.id){
            return(
                <iframe
                    src={"https://player.vimeo.com/video/" + this.props.id + "?color=c9ff23&title=0&byline=0&portrait=0"}
                    width="640"
                    height="360"
                    frameborder="0"
                    webkitallowfullscreen
                    mozallowfullscreen
                    allowfullscreen>
                </iframe>
            )
        }
    }

    render() {
        return (
            <div className="videoWrapper">
                {this.renderVideoPlayer()}
            </div>
        );
    }
}


// Enforce the type of props to send to this component
VideoPlayer.propTypes = {
    type: React.PropTypes.string,
    id: React.PropTypes.number
}


export default VideoPlayer;
