import React, { Component, PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import AxiomHeader from '../../../../axiomBuilder/AxiomHeader';
import ItemWrapper from '../../../common/components/ItemWrapper';

const itemWrapperStyle = {
  fontSize: 24,
  padding: 48,
  display: 'flex',
  alignItems: 'center',
};

const textfieldStyle = {
  paddingLeft: 24,
};

class RuleInfo extends Component {
  constructor(nextProps){
    super(nextProps);
    this.state = {
      hasChanged: false,
      ruleName: nextProps.ruleName,
      topic: nextProps.topic,
      value: nextProps.value,
      strategy: nextProps.strategy,
      rate: nextProps.rate,
      conditionName: nextProps.conditionName,
    }
  }
  componentWillReceiveProps(nextProps){
    if (nextProps.ruleName !== this.props.ruleName){
      this.setState({
        hasChanged: false,
        ruleName: nextProps.ruleName,
        topic: nextProps.topic,
        value: nextProps.value,
        strategy: nextProps.strategy,
        rate: nextProps.rate,
        conditionName: nextProps.conditionName,
      })
    }
  }
  getRuleData = () => {
    return ({
      ruleName: this.state.ruleName,
      topic: this.state.topic,
      value: this.state.value,
      strategy: this.state.strategy,
      rate: this.state.rate,
      conditionName: this.state.conditionName,
    })
  }
  render() {

    const {
      ruleName,
      submitRule,
      deleteRule,
    } = this.props;
    return (
      <div style={{width: '100%'}}>
        <AxiomHeader
          deleteSequence={deleteRule}
          axiomName="Rule"
          axiomNameValue={ruleName}
        />
        <RaisedButton
          fullWidth
          primary
          disabled={this.state.hasChanged !== true}
          label="Submit Changes"
          onTouchTap={() => {
            submitRule(this.getRuleData())
          }}
        />
        <div style={{ height: '70%', overflow: 'auto', boxShadow: '0px 0px 1px 0.1px black inset'}}>
        <ItemWrapper style={itemWrapperStyle}>
          Topic <TextField style={textfieldStyle} value={this.state.topic} onChange={(_,topic) => { this.setState({ topic, hasChanged: true }); }} />
        </ItemWrapper>
        <ItemWrapper style={itemWrapperStyle}>
          Value <TextField style={textfieldStyle} value={this.state.value} onChange={(_,value) => { this.setState({ value, hasChanged: true }); }} />
        </ItemWrapper>
        <ItemWrapper style={itemWrapperStyle}>
          Strategy
          <DropDownMenu value={this.state.strategy} onChange={(_,__,strategy) => { this.setState({ strategy, hasChanged: true }); }}>
            <MenuItem value="positive-edge" primaryText="positive-edge" />
            <MenuItem value="negative-edge" primaryText="negative-edge" />
            <MenuItem value="each" primaryText="each" />
          </DropDownMenu>
        </ItemWrapper>
        <ItemWrapper style={itemWrapperStyle}>
          Rate <TextField style={textfieldStyle} value={this.state.rate} onChange={(_,rate) => { this.setState({ rate, hasChanged: true }); }} />
        </ItemWrapper>
        <ItemWrapper style={itemWrapperStyle}>
          Condition <TextField style={textfieldStyle} value={this.state.conditionName} onChange={(_,__, conditionName) => { this.setState({ conditionName, hasChanged: true }); }} />
        </ItemWrapper>
        </div>
      </div>
    );
  }
}

RuleInfo.propTypes = {
  ruleName: PropTypes.string,
  topic: PropTypes.string,
  value: PropTypes.string,
  strategy: PropTypes.string,
  rate: PropTypes.string,
  conditionName: PropTypes.string,
  submitRule: PropTypes.func,
  deleteRule: PropTypes.func,
};

export default RuleInfo;
