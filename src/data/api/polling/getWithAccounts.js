import { Component, PropTypes } from 'react';
import fetch from 'isomorphic-fetch';

const getWithAccounts = (AUTOMATE_CORE_URL) => {
  const accountsUrl = `${AUTOMATE_CORE_URL}/accounts`;

  const request = async () => {
    try {
      const response = await fetch(accountsUrl, {
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

  const isAccountCreationAdminOnly = async () => {
    try {
      const response = await fetch(`${accountsUrl}/isAccountCreationAdminOnly`, {
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

  const addAccount = async (username, password) => {
    if (typeof(username) !== typeof('')){
      throw (new Error('username is undefined'));
    }
    if (typeof(password) !== typeof('')){
      throw (new Error('password is undefined'));
    }

    const response = await fetch(`${accountsUrl}/createUser`, {
      method: 'POST',
      mode: 'cors',
      headers: new Headers({
        'Content-Type': 'application/json',
        Accept: 'application/json',
      }),
      body: JSON.stringify({
        username,
        password,
      }),
    });
    return response;
  };


  const loginWithPassword = async (username, password) => {
    if (typeof(username) !== typeof('')){
      throw (new Error('username is undefined'));
    }
    if (typeof(password) !== typeof('')){
      throw (new Error('password is undefined'));
    }

    const response = await fetch(`${accountsUrl}/login`, {
      method: 'POST',
      mode: 'cors',
      headers: new Headers({
        'Content-Type': 'application/json',
        Accept: 'application/json',
      }),
      body: JSON.stringify({
        username,
        password,
      }),
    });

    if (response.status === 200){
      return await response.text();
    }else{
      throw (new Error('invalid credentials'));
    }
  };

  class WithAccounts extends Component {
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
          users: response,
        });
      }).catch(() => {
        this.setState({
          error: true,
        })
      });

      isAccountCreationAdminOnly().then(isAdminOnly => {
        this.setState({
          isAdminOnly,
        })
      }).catch(() => {
        this.setState({
          error: true,
        })
      });
    }
    render() {
      const { children, whileLoading } = this.props;
      if (!this.state.users && !this.state.isAdminOnly) {
        return whileLoading ? whileLoading() : null;
      }

      const users = this.state.users;
      const isAccountCreationAdminOnly = this.state.isAdminOnly;
      return children ? children({
        users,
        isAccountCreationAdminOnly,
        loginWithPassword,
        createUser: async (username, password) => {
          await addAccount(username, password);
          this.makeRequest();
        },
      }) : null;
    }
  }

  WithAccounts.propTypes = {
    whileLoading: PropTypes.func,
    children: PropTypes.func,
    refresh: PropTypes.number,
  };

  return WithAccounts;
};


export default getWithAccounts;
