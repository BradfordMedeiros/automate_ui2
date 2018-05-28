import { Component } from 'react';
import PropTypes from 'prop-types';
import fetch from 'isomorphic-fetch';

const getWithStates = (AUTOMATE_CORE_URL) => {
    const STATES_URL = `${AUTOMATE_CORE_URL}/states`;

    const deleteState = async stateName => (
        await fetch(`${STATES_URL}/${stateName}`, {
            method: 'DELETE',
        })
    );

    const addState = async stateName => (
        await  fetch(`${STATES_URL}/modify/states/${stateName}`, {
            method: 'POST',
        })
    );


    const saveState = async (stateName, evalLogic, rate) => {
        return (
            await fetch(`${STATES_URL}/modify/${stateName}`, {
                headers: new Headers({
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                }),
                body: JSON.stringify({
                    stateEval: evalLogic,
                    rate: Number(rate),
                }),
                method: 'POST',
            })
        );
    };


    class WithStates extends Component {
        constructor(props) {
            super(props);
            this.state = {
                hasData: false,
            };
        }
        componentWillMount() {
            this.getData();
        }
    getData = async () => {
        try {
            const response = await fetch(STATES_URL, {
                mode: 'cors',
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                },
            });
            const states = await response.json();

            this.setState({
                hasData: true,
                states: states.states,
            });
        } catch (err) {
            console.error('error while fetching ', err);
        }
    }
    render() {
        const { children, renderWhileLoading } = this.props;
        const { hasData, states } = this.state;

        if (hasData && children) {
            return children({
                states,
                addState:  async (stateName) => {
                    console.log('add state-------');
                    await addState(stateName);
                    this.getData();
                },
                deleteState:  async (stateName) => {
                    await deleteState(stateName);
                    this.getData();
                },
                saveState: async (stateName, evalLogic, rate) => {
                    await saveState(stateName, evalLogic, rate);
                    this.getData();
                }});

        } else if (children && renderWhileLoading) {
            return children({
                states: [],
            });
        }
        return null;
    }
    }

    WithStates.propTypes = {
        children: PropTypes.node,
        renderWhileLoading: PropTypes.bool,
    };

    WithStates.defaultProps = {
        children: undefined,
    };

    return WithStates;
};

export default getWithStates;
