import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Appbar from './components/layout/appbar/Appbar';
import Overlay from './components/layout/overlay/Overlay';
import getData from './data/getData';
import './style.css';
import PropTypes from "prop-types";

import AccountManagement from './components/overlayContent/accountManagement/AccountManagement';
import DeviceInfo from './components/overlayContent/deviceInfo/DeviceInfo';
import EventLog from './components/overlayContent/eventLog/EventLog';
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
                //background: 'radial-gradient(rgb(30,30,30),rgb(20,20,20))'
                background: 'url(http://getwallpapers.com/wallpaper/full/5/3/a/623615.jpg)',
                boxShadow: '0px 0px 10px 2px black inset',
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
                    <EventLog
                        data={[
                            { topic: 'test topic', timestamp: 'test timestamp'},
                            { topic: 'another test topic', timestamp: 'test timestamp'},

                        ]}
                        isAlertingEnabled={false}
                        emailAddress={"test email"}
                        onSetEmailAddress={emailAddress => {
                            console.log('set email: ', emailAddress);
                        }}
                        onSetIsAlertingEnabled={isEnabled => {
                            console.log('set enable alerting: ', isEnabled);
                        }}
                    />
                    {/*<AccountManagement
                        email="some email"
                        alias="some alias"
                        isAdmin={true}
                        allowUserCreation={true}
                        enableUserAccountCreation={() => {

                        }}
                        disableUserAccountCreation={() => {

                        }}
                        onLogout={() => {

                        }}
                        onUploadImage={() => {

                        }}
                    />*/}
                    {/*<DeviceInfo
                        automateCoreVersion="some version"
                        ipAddress="some ip"
                        macAddress="some mac"
                        onClickConfirmLockSystem={() => {
                            console.log('lock system');
                        }}
                    />*/}
                </Overlay>
            </div>
        )
    }
}


ReactDOM.render(<MockApp />, document.getElementById("root"));
