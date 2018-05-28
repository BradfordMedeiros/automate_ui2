import { Component } from 'react';
import PropTypes from 'prop-types';
import fetch from 'isomorphic-fetch';

const getWithEmail = (AUTOMATE_CORE_URL) => {
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

    const setEmail = async email => {
        const url = `${emailUrl}/address/${email}`;
        const response = await fetch(url, {
            method: 'POST',
            mode: 'cors',
        });
        return response;
    };

    const enableEmail = async email => {
        const url = `${emailUrl}/enable`;
        const response = await fetch(url, {
            method: 'POST',
            mode: 'cors',
        });
        return response;
    };

    const disableEmail = async email => {
        const url = `${emailUrl}/disable`;
        const response = await fetch(url, {
            method: 'POST',
            mode: 'cors',
        });
        return response;
    };

    class WithEmail extends Component {
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
            emailAddress,
            emailEnabled,
            setEmail: async emailAddress => {
                await setEmail(emailAddress);
                this.getData();
            },
            enableEmail: async () => {
                await enableEmail();
                this.getData();
            },
            disableEmail: async () => {
                await disableEmail();
                this.getData();
            },
        }) : null;
    }
    }

    WithEmail.propTypes = {
        whileLoading: PropTypes.func,
        children: PropTypes.func,
        refresh: PropTypes.number,
    };

    return WithEmail;
};


export default getWithEmail;
