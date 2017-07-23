import React, { Component } from 'react';

// Import widgets being used in this component
import HeadNav from '../components/HeadNav';
import LandingContainer from '../components/LandingContainer';
import TabContainer from '../components/TabContainer';
import SidebarContainer from '../components/SidebarContainer';

// Add in styles
import '../styles/App.css';
import '../styles/fonts.css';

class App extends Component {
    render() {
        return (
            <div>
                <HeadNav heading="weifund"/>
                <div className="App">

                    <LandingContainer
                        href="http://localhost:3001/campaign/weifund"
                        colspan={4}
                        rowspan={1} />

                    <TabContainer
                        href="http://localhost:3001/campaign/campaignIDShouldBeVariable"
                        colspan={3}
                        rowspan={1} />

                    <SidebarContainer
                        href="http://localhost:3001/stats/response"
                        colspan={1}
                        rowspan={1} />

                </div>
            </div>
        );
    }
}

export default App;
