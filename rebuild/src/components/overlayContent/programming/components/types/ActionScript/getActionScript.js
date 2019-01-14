import React, { Component } from 'react';
import assert from "assert";
import './style.css';

const getActionScript = (Header, SelectableTypes, AddItemDialog, CodeEditor, EditorControls) => {

  class ActionScript extends Component {
    state = {
      selectedIndex: 0,
      showDialog: false,
    };
    itemName = "";
    render() {
      const { 
        itemName, 
        onDeleteItem, 
        actionScriptNames,
        onAddActionScript,
      } = this.props;
      return (
          <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
            <Header
                itemName={itemName}
                itemType="Action Script"
                deleteItem={() => {
                  onDeleteItem(itemName);
                }}
            />
            <div style={{display: 'flex', flexGrow: 1}}>
              <SelectableTypes
                  items={actionScriptNames}
                  selectedIndex={this.state.selectedIndex}
                  onItemSelected={(_, selectedIndex) => {
                    console.log('selected');
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
                <EditorControls showRate={false} />
                <CodeEditor
                    initialText={"// insert code here \n\n"}
                    onTextChange={() => { }}
                    name="action script name"
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