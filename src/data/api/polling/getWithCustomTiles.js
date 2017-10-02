import { Component, PropTypes } from 'react';
import fetch from 'isomorphic-fetch';
//import download from 'downloadjs';

const getWithCustomTiles = (AUTOMATE_CORE_URL) => {
  const url = `${AUTOMATE_CORE_URL}/tiles/`;

  const getCustomTiles = async () => {

    const response = await fetch(url, {
      method: 'GET',
      mode: 'cors',
    });
    const customTiles = (await response.json()).tiles;
    if (!customTiles){
      throw (new Error('custom tiles not included in response'));
    }else{
      return databases;
    }
  };

  /*const uploadDatabase = async (databaseName, file) => {
    const formData = new FormData();
    formData.append('thing', file);
    return await fetch(`${url}upload/${file.name}`, {
      method: 'POST',
      body: formData,
    })
  };*/

  /*const deleteDatabase = async databaseName => {
    const response = await fetch(`${url}${databaseName}`, {
      method: 'DELETE',
      mode: 'cors',
    });
  };*/

  /*const downloadDatabase = async databaseName => {
    const response = await fetch(`${url}download/${databaseName}`, {
      method: 'GET',
      mode: 'cors',
    });
    const blob = await response.blob();
    download(blob, databaseName, "text/plain");
  };*/

  class WithCustomTiles extends Component {
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
      const databases = await getCustomTiles();
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
            uploadDatabase,
            downloadDatabase,
            deleteDatabase,
          }) : null
      );
    }
  }

  WithCustomTiles.propTypes = {
    whileLoading: PropTypes.func,
    children: PropTypes.func,
    refresh: PropTypes.number,
  };

  return WithCustomTiles;
};


export default getWithCustomTiles;
