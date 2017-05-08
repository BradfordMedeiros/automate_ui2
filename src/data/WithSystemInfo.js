import React, { Component, PropTypes } from 'react';
const AUTOMATE_CORE_URL = 'http://127.0.0.1:9000';
const SYSTEM_INFO  = `${AUTOMATE_CORE_URL}/info`;

class WithSystemInfo extends Component {
  state = {
    hasData: false,
    macAddress: undefined,
    ipAddress: undefined,
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
        ipAddress: info.ipAddress,
        macAddress: info.macAddress,
      });
    } catch (err) {
      console.error('error while fetching ', err);
    }
  }
  componentWillMount() {
    this.getData();
  }
  render() {
    const { children } = this.props;

    return (
      this.state.hasData ?
        children({ macAddress: this.state.macAddress, ipAddress: this.state.ipAddress }) :
        null
    );
  }
}

WithSystemInfo.propTypes = {
  children: PropTypes.node.isRequired,
}

export default WithSystemInfo;