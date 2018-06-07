import React, { Component } from 'react';
import CodeEditor from './components/CodeEditor';
import EditorControls from './components/EditorControls/EditorControls';
import PropTypes from "prop-types";
import './style.css';

const getStateScript = (Header, SelectableTypes) => {

  class StateScript extends Component {
    state = {
      selectedIndex: 0,
    };

    render() {
      return (
          <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
            <Header
                itemName={'some name'}
                itemType={'some type'}
                deleteSequence={() => {
                }}
            />
            <div style={{display: 'flex', flexGrow: 1}}>
              <SelectableTypes
                  items={['one', 'two', 'three', 'four']}
                  selectedIndex={this.state.selectedIndex}
                  onItemSelected={(_, selectedIndex) => {
                    console.log('selected');
                    this.setState({
                      selectedIndex,
                    })
                  }}
              />
              <div className="statescript_editor_wrapper">
                <EditorControls
                    onEditModeClicked={() => { }}
                    onUploadClicked={() => {} }
                    onRevertClicked={()=>{}}
                    editModeEnabled={true}
                    disableRevert={false}
                    hideUpload={false}
                    hideRevert={false}
                    showRate={true}
                    rate={1000}
                    onRateChange={()=>{}}
                />
                <CodeEditor
                    initialText={"// insert code here \n\n"}
                    onTextChange={() => { }}
                    name="statescript name"
                />
              </div>
            </div>
          </div>
      )
    }
  }

  return StateScript;
};


export default getStateScript;