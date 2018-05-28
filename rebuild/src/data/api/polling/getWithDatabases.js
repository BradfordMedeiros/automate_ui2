import { Component } from 'react';
import PropTypes from 'prop-types';
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

    const uploadDatabase = async (databaseName, file) => {
        const formData = new FormData();
        formData.append('thing', file);
        return await fetch(`${url}upload/${file.name}`, {
            method: 'POST',
            body: formData,
        });
    };

    const createNewDatabase = async (databaseName) => {
        const response = await fetch(`${url}${databaseName}`, {
            method: 'POST',
            mode: 'cors',
        });
    };

    const setDatabaseAsActive = async databaseName => {
        const response = await fetch(`${url}set_as_active/${databaseName}`, {
            method: 'POST',
            mode: 'cors',
        });
        return response;
    };
    const copyDatabase = async (databaseNameToCopy, databaseName) => {
        const response = await fetch(`${url}copy/${databaseName}`, {
            headers: new Headers({
                'Content-Type': 'application/json',
                Accept: 'application/json',
            }),
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify({
                from: databaseNameToCopy,
            }),
        });
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
        download(blob, databaseName, 'text/plain');
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
        });
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
                    createNewDatabase,
                    copyDatabase,
                    uploadDatabase,
                    downloadDatabase,
                    deleteDatabase,
                    setDatabaseAsActive,
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
