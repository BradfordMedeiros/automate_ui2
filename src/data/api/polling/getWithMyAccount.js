import { Component, PropTypes } from 'react';
import fetch from 'isomorphic-fetch';

const getWithMyAccount = (AUTOMATE_CORE_URL) => {
  const adminUrl = `${AUTOMATE_CORE_URL}/accounts`;

  const request = async () => {
    try {
      const response = await fetch(adminUrl, {
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

  class WithMyAccount extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: null,
        error: false,
      };
    }
    componentWillMount() {
      this.makeRequest();
    }
    makeRequest = () => {
      request().then((response) => {
        this.setState({
          data: response,
        });
      }).catch(() => {
        this.setState({
          error: true,
        })
      });

    }
    render() {
      const { children, whileLoading } = this.props;
      if (!this.state.data) {
        return whileLoading ? whileLoading() : null;
      }

      const settings = this.state.data;

      return children ? children({
        settings,
      }) : null;
    }
  }

  WithMyAccount.propTypes = {
    whileLoading: PropTypes.func,
    children: PropTypes.func,
  };

  return WithMyAccount;
};


export default getWithMyAccount;
