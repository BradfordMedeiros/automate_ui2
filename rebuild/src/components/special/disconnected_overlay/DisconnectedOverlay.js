import React, { Component } from 'react';
import './style.css';

class DisconnectedOverlay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numDots: 1,
        };
        this.countHandle = undefined;
    }
    componentWillMount() {
        this.countHandle = setInterval(() => {
            this.setState({ numDots: (this.state.numDots + 1) % 5 });
        }, 1000);
    }
    componentWillUnmount() {
        clearInterval(this.countHandle);
    }
    render() {
        return (
            <div className="disconnected_overlay">
                <div>
                    <div id="disconnected_overlay_header" style={{ fontSize: '150%' }}>Automate is disconnected</div>
                    <div id="disconnected_overlay_subtitle" style={{ fontSize: '100%' }}>
                Attempting to reconnect {Array(...Array(this.state.numDots)).map(() => '.')}
                    </div>
                </div>
            </div>
        );
    }
}

export default DisconnectedOverlay;

