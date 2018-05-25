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
import Environment from './components/overlayContent/environment/Environment';
import Database from './components/overlayContent/database/Database';

import LoginScreen from './components/special/login_screen/LoginScreen';
import DisconnectedOverlay from './components/special/disconnected_overlay/DisconnectedOverlay';

//const Data = getData();


const contentMap = {
    disconnected: (
      <DisconnectedOverlay />
    ),
    login: (
        <LoginScreen
            users={[{
                username: 'some user',
                imageURL: '',
                remote: false,
            }]}

            onCreateAccount={() => { }}
            showCreateAccount={true}
            onSelectAccount={() => { }}
            selectedAccountIndex={0}
            onLoginWithPassword={() => { }}
            onSendResetEmail={() => { }}
            onSetPassword={() => { }}
            onPasswordTextChange={() => { }}
            resetErrorText={'fucked up'}
            errorText={"some error wow"}
        />
    ),
    database: (
        <Database
            databases={[
                { isActive: true, name: 'some db' },
                { isActive: false, name: 'some db' },
                { isActive: false, name: 'some db' },
                { isActive: false, name: 'some db' },
                { isActive: false, name: 'some db' },
                { isActive: false, name: 'some db' },
                { isActive: false, name: 'some db' },

            ]}
            setDatabaseAsActive={database => {
                console.log('set db as active: ', database);
            }}
            createNewDatabase={database => {
                console.log('create database: ', database);
            }}
            copyDatabase={(databaseToCopy, databaseNameTarget) => {
                console.log('create database: from: ', databaseToCopy,' to: ', databaseNameTarget);
            }}
            uploadDatabase={database => {
                console.log('upload database: ', database);
            }}
            deleteDatabase={database => {
                console.log('delete database ', database);
            }}
            downloadDatabase={database => {
                console.log('download database: ', database);
            }}
        />
    ),
    event: (
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
    ),
    account: (
        <AccountManagement
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
        />
    ),
    device: (
        <DeviceInfo
            automateCoreVersion="some version"
            ipAddress="some ip"
            macAddress="some mac"
            onClickConfirmLockSystem={() => {
                console.log('lock system');
            }}
        />
    ),
    env: (
        <Environment
            variables={[
                { name: 'some name',  value: 'some value' },
                { name: 'some name',  value: 'some value' },
                { name: 'some name',  value: 'some value' },
                { name: 'some name',  value: 'some value' },
                { name: 'some name',  value: 'some value' },
                { name: 'some name',  value: 'some value' },
                { name: 'some name',  value: 'some value' },

            ]}
            onDelete={(item, index) => {
                console.log('delete index ', index, ' value ', item)
            }}
            onAdd={({ token, value}) => {
                console.log('add: token(',token, ') value: (', value,')');
            }}
        />
    )
};

class InjectableContent extends Component {
    state = {
        content: contentMap['disconnected'],
    };
    setContent = contentType => {
      const component = contentMap[contentType];
      this.setState({
          content: component || null,
      })
    };
    render() {
        window.set  = this.setContent;
        return this.state.content;
    };
}

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
                    <InjectableContent />
                </Overlay>
            </div>
        )
    }
}


ReactDOM.render(<MockApp />, document.getElementById("root"));
