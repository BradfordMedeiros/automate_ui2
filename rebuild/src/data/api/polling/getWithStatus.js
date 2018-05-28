import { Component } from 'react';
import PropTypes from 'prop-types';

const REFRESH_RATE = 1000;

const getWithStatus = (AUTOMATE_CORE_URL) => {
    const STATUS_INFO = `${AUTOMATE_CORE_URL}/status`;

    class WithStatus extends Component {
        constructor(props) {
            super(props);
            this.state = {
                hasData: false,
                isConnected: true,
            };
            this.handle = undefined;
        }
        componentWillMount() {
            this.getData();
            this.handle = setInterval(this.getData, REFRESH_RATE);
        }
        componentWillUnmount() {
            clearInterval(this.handle);
        }
    getData = async () => {
        const { onSetIsConnected, onSetIsDisconnected } = this.props;
        try {
            const response = await fetch(STATUS_INFO, {
                mode: 'cors',
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                },
            });
            await response.json();
            if (!this.state.isConnected) {
                this.setState({
                    hasData: true,
                    isConnected: true,
                });
                if (onSetIsConnected) {
                    onSetIsConnected();
                }
            }
        } catch (err) {
            if (this.state.isConnected) {
                this.setState({
                    hasData: true,
                    isConnected: false,
                });
            }
            if (onSetIsDisconnected) {
                console.error('----------on is disconnected');
                onSetIsDisconnected();
            }
        }
    }
    render() {
        const { children } = this.props;
        if (!this.state.hasData) {
            return null;
        }
        return children ? children({ isConnected: this.state.isConnected }) : null;
    }
    }

    WithStatus.propTypes = {
        children: PropTypes.func,
        onSetIsConnected: PropTypes.func,
        onSetIsDisconnected: PropTypes.func,
    };

    return WithStatus;
};


export default getWithStatus;
