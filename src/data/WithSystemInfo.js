import React, { Component, PropTypes } from 'react';
const AUTOMATE_CORE_URL = 'http://127.0.0.1:9000';
const SYSTEM_INFO = `${AUTOMATE_CORE_URL}/info`;

class WithSystemInfo extends Component {
  state = {
    hasData: false,
    info: undefined,
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
      console.error('error while fetching ', err);
    }
  }
  componentWillMount() {
    this.getData();
  }
  render() {
    const { children, injectLoading } = this.props;

    return (
      this.state.hasData ?
        children({ ...this.state.info }) :
        injectLoading ? children({ public_ip_address: 'Loading', mac_address: 'Loading' }) : null
    );
  }
}

WithSystemInfo.propTypes = {
  children: PropTypes.node.isRequired,
  injectLoading: PropTypes.bool,
};

export default WithSystemInfo;
