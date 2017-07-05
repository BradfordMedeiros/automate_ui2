import React, { Component } from 'react';
import { Subheader, FlatButton, RaisedButton, DropDownMenu, MenuItem, TextField } from 'material-ui';

const style = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'black',
  padding: 18,
};

const topicValueStyle = {
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
  paddingTop: 32,
  paddingBottom: 32,
  boxShadow: '0px 0px 2px 1px black',
  marginLeft: 10,
  alignItems: 'center',
};

const detailStyle = {
  display: 'flex',
  flexGrow: 5,
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 24,
  color: 'rgb(210,210,210)',
  boxShadow: '0px 1px 10px 1px black inset',
};

const detailStyle2 = {
  display: 'flex',
  flexGrow: 5,
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 24,
  color: 'rgb(210,210,210)',
  boxShadow: '0px 1px 10px 1px black',
};

const innerStyle = {
  borderLeft: '1px solid rgba(0, 0, 0, 0.5)',
  height: 110,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRight: '1px solid rgba(0, 0, 0, 0.5)',
  padding: 18,
  paddingBottom: 40,
  background: '#2f2f2f',
};

class QuickAdd extends Component {
  render() {
    return (
      <div>
        <div style={style}>
          <FlatButton label="Second" />
          <FlatButton backgroundColor="rgb(40,40,40)" label="Minute" />
          <FlatButton label="Hourly" />
          <FlatButton label="Daily" />
          <FlatButton label="Weekly" />
          <FlatButton label="Monthly" />
          <FlatButton secondary label="Schedule Single Event" />
        </div>

        <div style={{ display: 'flex', flexDirection: 'row'  }}>
          <div style={topicValueStyle}>
            <TextField floatingLabelText={"Topic"} />
            <TextField floatingLabelText={"Value"} />
          </div>
          <div style={detailStyle}>
            Every <TextField /> hour of the day
          </div>
        </div>
        <div style={detailStyle2} >
          <div style={innerStyle}>
            <TextField floatingLabelText="Second" style={{ width: 100 }} />
            <TextField floatingLabelText="Minute" style={{ width: 100 }} />
            <TextField floatingLabelText="Hourly" style={{ width: 100 }} />
            <TextField floatingLabelText="Daily" style={{ width: 100 }} />
            <TextField floatingLabelText="Week" style={{ width: 100 }} />
            <TextField floatingLabelText="Month" style={{ width: 100 }} />
          </div>
        </div>
        <RaisedButton primary="Submit" label="Submit" fullWidth />
      </div>
    );
  }
}


export default QuickAdd;
