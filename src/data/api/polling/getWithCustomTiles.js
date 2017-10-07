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

    const tiles = (await response.json());
    return tiles;
  };

  const uploadTile = async (formData, tileName) => {
    const response  = await fetch(`${url}${tileName}`, {
      method: 'POST',
      mode: 'cors',
      body: formData,
    });
    return response;
  };

  const deleteTile = async tileName => {
    console.log('delete tile  placeholder');
    console.log('delete: ', tileName);
  };

  const downloadTile = async tileName => {
    console.log('download  tile placeholder');
    console.log('download: ', tileName);
  };

  class WithCustomTiles extends Component {
    constructor(props) {
      super(props);
      this.state = {
        tiles: null,
        error: false,
      };
      this.intervalHandle = undefined;
    }
    componentWillMount() {
      this.makeTileRequest();
      this.getTiles();
    }
    componentWillUnmount() {
      clearInterval(this.intervalHandle);
    }
    makeTileRequest =  async () => {
      const tiles = await getCustomTiles();
      this.setState({
        tiles,
      })
    }
    getTiles() {
      const { refresh = 10000 } = this.props;
      clearInterval(this.intervalHandle);
      this.intervalHandle = setInterval(this.makeTileRequest, refresh);
    }
    render() {
      const { children, whileLoading } = this.props;
      if (!this.state.tiles) {
        return whileLoading ? whileLoading() : null;
      }
      return (
        children ?
          children({
            tiles: this.state.tiles,
            uploadTile,
            deleteTile,
            downloadTile,
          }) : null
      );
      return (
        children({
          tiles: [],
        })
      )
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
