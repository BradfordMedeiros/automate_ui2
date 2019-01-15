import React, { Component } from 'react';
import assert from "assert";
import './style.css';

const getActionScript = (Header, SelectableTypes, AddItemDialog, CodeEditor, EditorControls) => {
  class ActionScript extends Component {
    state = {
      selectedIndex: 0,
      showDialog: false,
    };
    constructor(props){
      super(props);
      this.itemName = "";
      this.topic = undefined || this.props.initialTopicValue;
      this.secondaryTopic = undefined || this.props.initialSecondaryTopicValue;
      this.code = undefined;
    }
    render() {
      const { 
        itemName, 
        onDeleteItem, 
        actionScriptNames,
        onAddActionScript,
        actionScripts,
      } = this.props;

      const scriptNames = actionScripts.map(script => script.name);
      const currentScriptName = scriptNames[this.state.selectedIndex];
      const scriptExists = actionScripts.length !== 0;

      const scriptCode = scriptExists ? actionScripts[this.state.selectedIndex].script: "// add code";
      const initialTopicValue = scriptExists ? actionScripts[this.state.selectedIndex].topic : "default";
      const initialSecondaryTopicValue = scriptExists ? actionScripts[this.state.selectedIndex].toTopic : "defaultSecondary";

      return (
        <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
          <Header
            itemName={itemName}
            itemType="Action Script"
            deleteItem={() => {
              onDeleteItem(currentScriptName);
            }}
          />
          <div style={{display: 'flex', flexGrow: 1}}>
            <SelectableTypes
              items={scriptNames}
              selectedIndex={this.state.selectedIndex}
              onItemSelected={(_, selectedIndex) => {
                console.log('selected');
                this.code = undefined;
                this.topic = undefined;
                this.secondaryTopic = undefined;
                this.setState({
                  selectedIndex,
                })
              }}
              onAddClicked={() => {
                this.setState({
                  showDialog: true,
                })
              }}
            />
            <div className="actionscript_editor_wrapper">
              <EditorControls 
                showRate={false} 
                showSecondaryTopic 
                initialTopicValue={this.topic || initialTopicValue}
                initialSecondaryTopicValue={this.secondaryTopic || initialSecondaryTopicValue}
                onTopicChange={topic => {
                  this.topic = topic;
                }}
                onTopicSecondaryChange={topic => {
                  this.secondaryTopic = topic;
                }}
                onUploadClicked={() => {
                  onAddActionScript({
                    name: currentScriptName,
                    fromTopic: this.topic || initialTopicValue,
                    toTopic: this.secondaryTopic || initialSecondaryTopicValue,
                    script: this.code || scriptCode,
                  })
                }}
              />
              <CodeEditor
                initialText={this.code || scriptCode}
                name={currentScriptName}
                onTextChange={code => { 
                  this.code = code;
                }}
              />
            </div>
          </div>
          <AddItemDialog 
            open={this.state.showDialog} 
            closeDialog={() => { this.setState({ showDialog: false }) }}
            onInputChange={addItemName => {
              this.itemName = addItemName;
            }}
            onAddItem={() => {
              assert(this.itemName !== undefined, "need item name defined");
              onAddActionScript({
                name: this.itemName,
                fromTopic: "default-topic", 
                toTopic: "default-to-topic",
                script: 'return 0',
              });
              this.setState({
                showDialog: false,
              });
            }}
          />
        </div>
      )
    }
  }

  return ActionScript;
};


export default getActionScript;