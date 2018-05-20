import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Appbar from './components/appbar/Appbar';
import Overlay from './components/overlay/Overlay';
import getData from './data/getData';
import './style.css';
import PropTypes from "prop-types";

//const Data = getData();

class MockApp extends Component {
    state = {
        isRotated: false,
    };
    render() {
        return (
            <div style={{
                display: 'flex',
                flexGrow: 1,
                flexDirection: 'column',
                background: 'radial-gradient(rgb(30,30,30),rgb(20,20,20))'
            }}>
                <Appbar
                    title="automate"
                    showHideMenu
                    rotateAddIcon={this.state.isRotated}
                    systemLocked={false}
                    onRotatedAddIconClick={() => {
                        console.log('rotated click');
                        this.setState({
                            isRotated: false,
                        })
                    }}
                    onAddIconClick={() => {
                        console.log('icon clicked');
                        this.setState({
                            isRotated: true,
                        })
                    }}
                    onUserIconClick={() => {
                        console.log('user icon clicked');
                    }}
                    onHideMenu={() => {
                        console.log('hide menu clicked');
                    }}
                    onToggle={() => {
                        console.log('toggle');
                    }}
                />

                <Overlay isExpanded={this.state.isRotated}>
                    <div>hello</div>
                </Overlay>
            </div>
        )
    }
}


ReactDOM.render(<MockApp />, document.getElementById("root"));
