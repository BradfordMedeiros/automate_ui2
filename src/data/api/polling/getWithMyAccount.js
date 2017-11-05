import { Component, PropTypes } from 'react';
import fetch from 'isomorphic-fetch';

const getWithMyAccount = (AUTOMATE_CORE_URL) => {
  const adminUrl = `${AUTOMATE_CORE_URL}/accounts`;

  const request = async token => {
    if (typeof(token) !== typeof('')){
      console.error('no auth token provided');
      throw (new Error('no token provided'));
    }
    try {
      const response = await fetch(`${adminUrl}/myAccount`, {
        mode: 'cors',
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json',
          Accept: 'application/json',
        }),
        body: JSON.stringify({
          token,
        }),

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

  const enableUserAccountCreation = async () => {
    return await fetch(`${adminUrl}/enableUserAccountCreation`, {
      method: 'POST',
      mode: 'cors',
    });
  };

  const disableUserAccountCreation = async () => {
    return await fetch(`${adminUrl}/disableUserAccountCreation`, {
      method: 'POST',
      mode: 'cors',
    });
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
      request(this.props.token).then((response) => {
        this.setState({
          data: response,
        });
      }).catch(() => {
        this.setState({
          data: {},
          error: true,
        })
      });

    }
    render() {
      const { children, whileLoading } = this.props;
      if (!this.state.data) {
        return whileLoading ? whileLoading() : null;
      }

      const data = this.state.data;

      return children ? children({
        email: data.email,
        alias: data.alias,
        isAdmin: data.isAdmin,
        admin: data.admin,
        enableUserAccountCreation: async () => {
          await enableUserAccountCreation();
          this.makeRequest();
        },
        disableUserAccountCreation: async () => {
          await disableUserAccountCreation();
          this.makeRequest();
        },
      }) : null;
    }
  }

  WithMyAccount.propTypes = {
    whileLoading: PropTypes.func,
    children: PropTypes.func,
    token: PropTypes.string,
  };

  return WithMyAccount;
};


export default getWithMyAccount;
