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


  const addAccount = async systemName => {
    /*const url = systemName ? `${accountsUrl}/${systemName}` : accountsUrl;
    const response = await fetch(url, {
      method: 'POST',
      mode: 'cors',
    });
    return response;*/
    console.error('add account not implemented');
  };

  class WithAccounts extends Component {
    /*constructor(props) {
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
    }*/
    render() {

      const { children, whileLoading } = this.props;
      /*if (!this.state.data) {
        return whileLoading ? whileLoading() : null;
      }

      const { accounts } = this.state.data;
      return children ? children({
        accounts,
        addAccount,
      }) : null;*/
      return children ? children({
        users: [
          {
            username: 'brad',
            imageUrl: 'data:image/jpeg;base64,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',
          },
          {
            username: 'cool guy slim',
            imageUrl: 'https://pbs.twimg.com/profile_images/1691460519/Conker_Gamer_Pic_400x400.png',
          },
          {
            username: 'test',
          }
        ],
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
