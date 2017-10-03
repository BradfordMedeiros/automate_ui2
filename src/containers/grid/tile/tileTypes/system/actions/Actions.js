import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { List, ListItem, Subheader } from 'material-ui';
import WithData from '../../../../../../data/WithData';
import './style.css';

const WithActions = WithData.polling.WithActions;
class Actions extends Component {
  componentWillReceiveProps(props) {
    const { actionToPerform } = props;
    if (actionToPerform) {
      this.actionToPerform = actionToPerform;
    }
  }
  actionToPerform = undefined;
  render() {
    return (
      <div className="system_actions_outer">
        <div className="system_actions_title"><Subheader>Actions </Subheader></div>
        <div className="system_actions_inner">
          <WithActions>
            {({ actions, executeAction }) => {
              if (this.actionToPerform) {
                executeAction(this.actionToPerform);
                this.actionToPerform = undefined;
              }
              return (
                <List>
                  {actions.map((action, key) =>
                    (<ListItem
                      primaryTogglesNestedList={false}
                      style={{ borderBottom: '1px solid rgb(40,40,40)' }}
                      key={key} // eslint-disable-line
                      onClick={() => executeAction(action.name)}
                      primaryText={<Subheader>{action.name}</Subheader>}
                    />),
                  )}
                </List>
              );
            }}
          </WithActions>
        </div>
      </div>
    );
  }
}

Actions.propTypes = {
  actionToPerform: PropTypes.string,
};

const mapStateToProps = state => ({
  actionToPerform: state.getIn(['actionReducer', 'action']),
});

export default connect(mapStateToProps)(Actions);

