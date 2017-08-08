import { Component, PropTypes } from 'react';
import fetch from 'isomorphic-fetch';
import download from 'downloadjs';

const getWithDatabases = (AUTOMATE_CORE_URL) => {
  const url = `${AUTOMATE_CORE_URL}/databases/`;

  const getDatabases = async () => {

    const response = await fetch(url, {
      method: 'GET',
      mode: 'cors',
    });
    const databases = (await response.json()).databases;
    if (!databases){
      throw (new Error('databases not included in response'));
    }else{
      return databases;
    }
  };

  const createNewDatabase = async () => {

  };

  const deleteDatabase = async databaseName => {
    const response = await fetch(`${url}${databaseName}`, {
      method: 'DELETE',
      mode: 'cors',
    });
  };

  const downloadDatabase = async databaseName => {
    const response = await fetch(`${url}download/${databaseName}`, {
      method: 'GET',
      mode: 'cors',
    });
    const blob = await response.blob();
    download(blob, databaseName, "text/plain");
  };

  class WithDatabases extends Component {
    constructor(props) {
      super(props);
      this.state = {
        databases: null,
        error: false,
      };
      this.intervalHandle = undefined;
    }
    componentWillMount() {
      this.makeDatabaseRequest();
      this.getDatabases();
    }
    componentWillUnmount() {
      clearInterval(this.intervalHandle);
    }
    makeDatabaseRequest =  async () => {
      const databases = await getDatabases();
      this.setState({
        databases,
      })
    }
    getDatabases() {
      const { refresh } = this.props;
      clearInterval(this.intervalHandle);
      this.intervalHandle = setInterval(this.makeDatabaseRequest, refresh);
    }
    render() {
      const { children, whileLoading } = this.props;
      if (!this.state.databases) {
        return whileLoading ? whileLoading() : null;
      }
      return (
        children ?
          children({
            databases: this.state.databases,
            downloadDatabase,
            deleteDatabase,
          }) : null
      );
    }
  }

  WithDatabases.propTypes = {
    whileLoading: PropTypes.func,
    children: PropTypes.func,
    refresh: PropTypes.number,
  };

  return WithDatabases;
};


export default getWithDatabases;
