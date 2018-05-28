import { Component } from 'react';
import PropTypes from 'prop-types';
import fetch from 'isomorphic-fetch';

const REFRESH_RATE = 1000;

const getWithActions = (AUTOMATE_CORE_URL) => {
  const ACTIONS_URL = `${AUTOMATE_CORE_URL}/actions`;

  const saveAction = async (actionName, evalLogic) => {
    const actionEval = evalLogic;

    return (
      fetch(`${ACTIONS_URL}/modify/${actionName}`, {
        headers: new Headers({
          'Content-Type': 'application/json',
          Accept: 'application/json',
        }),
        body: JSON.stringify({
          actionEval,
        }),
        method: 'POST',
      })
    );
  };


  const addAction = async actionName => (
    fetch(`${ACTIONS_URL}/modify/actions/${actionName}`, {
      method: 'POST',
    })
  );

  const deleteAction = async actionName => (
    fetch(`${ACTIONS_URL}/${actionName}`, {
      method: 'DELETE',
    })
  );

    // @todo should remove probaby?
  const executeAction = async actionName => (
    fetch(`${ACTIONS_URL}/${actionName}`, {
      method: 'POST',
    })
  );

  class WithActions extends Component {
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
        const response = await fetch(ACTIONS_URL, {
          mode: 'cors',
          method: 'GET',
          headers: {
            Accept: 'application/json',
          },
        });
        const states = await response.json();
        this.setState({
          hasData: true,
          actions: states.actions,
        });
      } catch (err) {
        // what to do
      }
    }
    render() {
      const { children, renderWhileLoading } = this.props;
      const { hasData, actions } = this.state;

      if (hasData && children) {
        return children({
          actions,
          addAction: async (actionName) => {
            await addAction(actionName);
            this.getData();
          },
          deleteAction: async (actionName) => {
            await deleteAction(actionName);
            this.getData();
          },
          saveAction: async (actionName, evalLogic) => {
            await saveAction(actionName, evalLogic);
            this.getData();
          },
          executeAction,
        });
      } else if (children && renderWhileLoading) {
        return children({ actions: [] });
      }
      return null;
    }
  }

  WithActions.propTypes = {
    children: PropTypes.func.isRequired,
    renderWhileLoading: PropTypes.bool,
  };

  return WithActions;
};

export default getWithActions;
