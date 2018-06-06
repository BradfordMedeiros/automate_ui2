import React, { Component } from 'react';
import CodeEditor from './components/CodeEditor';
import EditorControls from './components/EditorControls';
import PropTypes from "prop-types";

const getStateScript = (Header, SelectableTypes) => {

  class StateScript extends Component {
    state = {
      selectedIndex: 0,
    };

    render() {
      return (
          <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
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
      )
    }
  }

  return StateScript;
};


export default getStateScript;