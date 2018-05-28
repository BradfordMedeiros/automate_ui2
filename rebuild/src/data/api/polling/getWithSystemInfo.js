import { Component } from 'react';
import PropTypes from 'prop-types';

const getWithSystemInfo = (AUTOMATE_CORE_URL) => {
    const SYSTEM_INFO = `${AUTOMATE_CORE_URL}/info`;

    class WithSystemInfo extends Component {
    state = {
        hasData: false,
        info: undefined,
    }
    componentWillMount() {
        this.getData();
    }
    getData = async () => {
        try {
            const response = await fetch(SYSTEM_INFO, {
                mode: 'cors',
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                },
            });
            const info = await response.json();
            this.setState({
                hasData: true,
                info,
            });
        } catch (err) {
        // better error handling?
        }
    }
    render() {
        const { children, injectLoading } = this.props;
        if (!this.state.hasData) {
            return injectLoading ? children({
                public_ip_address: 'Loading',
                mac_address: 'Loading',
                automate_core_version: 'loading',
            }) : null;
        }
        return children({ ...this.state.info });
    }
    }

    WithSystemInfo.propTypes = {
        children: PropTypes.func.isRequired,
        injectLoading: PropTypes.bool,
    };
    return WithSystemInfo;
};


export default getWithSystemInfo;
