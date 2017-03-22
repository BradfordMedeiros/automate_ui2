
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {List, ListItem, Subheader } from 'material-ui';
import WithActions from '../../../../../data/WithActions';
import './style.css';


class Actions extends Component {
  actionToPerform = undefined;

  componentWillReceiveProps(props) {
    console.error('receive props called');
    const { actionToPerform } = props;
    if (actionToPerform){
      console.error('should perform ', actionToPerform);
      this.actionToPerform = actionToPerform;
    }
  }
  render() {
    console.error('render called');
    return (
      <div className="system_actions_outer">
        <div className="system_actions_title">
          <Subheader>Actions <div className="system_actions_add"> + Add New Action</div></Subheader>
        </div>
        <div className="system_actions_inner">
          <WithActions>
            {({ actions, executeAction }) => {
              if (this.actionToPerform){
                console.log('executing ', this.actionToPerform);
                executeAction(this.actionToPerform);
                this.actionToPerform = undefined;
              }
              return (
                <List>
                  {actions.map((action,index) =>
                    <ListItem
                      primaryTogglesNestedList={false}
                      style={{ borderBottom: '1px solid rgb(40,40,40)' }}
                      key={index}
                      onClick={() => executeAction(action.name)}
                      primaryText={<Subheader>{action.name}</Subheader>}
                    >
                    </ListItem>
                  )}
                </List>
              )
            }}
          </WithActions>
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state) => ({
  actionToPerform: state.getIn(['actionReducer', 'action']),
});

export default connect(mapStateToProps)(Actions);

