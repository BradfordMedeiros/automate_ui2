import { Component, PropTypes } from 'react';
import fetch from 'isomorphic-fetch';

const getWithIsSystemLocked = (AUTOMATE_CORE_URL) => {
  const emailUrl = `${AUTOMATE_CORE_URL}/email`;

  const request = async () => {
    try {
      const response = await fetch(emailUrl, {
        method: 'GET',
        mode: 'cors',
      });
      const text = await response.text();
      try {
        const parsedText = JSON.parse(text);
        return parsedText;
      } catch (err) {
        throw (err);
      }
    } catch (err) {
      throw (err);
    }
  };


  const lockSystem = async () => {
    const url = `${emailUrl}/disable`;
    const response = await fetch(url, {
      method: 'POST',
      mode: 'cors',
    });
    return response;
  };

  class WithIsSystemLocked extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: null,
        error: false,
      };
    }
    componentWillMount() {
      this.getData();
    }
    getData() {
      const { refresh } = this.props;
      this.makeRequest();
    }
    makeRequest = () => {
      request().then((response) => {
        this.setState({
          data: response,
        });
      }).catch({
        error: true,
      });
    }
    render() {
      const { children, whileLoading } = this.props;
      if (!this.state.data) {
        return whileLoading ? whileLoading() : null;
      }

      const { emailAddress, emailEnabled } = this.state.data;
      return children ? children({
        lockSystem: async () => {
          await lockSystem();
          window.location.reload();
        },
      }) : null;
    }
  }

  WithIsSystemLocked.propTypes = {
    whileLoading: PropTypes.func,
    children: PropTypes.func,
    refresh: PropTypes.number,
  };

  return WithIsSystemLocked;
};


export default getWithIsSystemLocked;
