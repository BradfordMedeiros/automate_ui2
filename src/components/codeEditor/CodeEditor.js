import React, { Component, PropTypes } from 'react';
import './style.css';

const defaultText =  "function customState(){ \n"
+ "//Enter your custom state here// Remember to return a value! \n"
+ "// Should be a short running function \n"
+ " // Generally this means long running calls like setInterval are probably wrong \n"
+ "const sampleState = true; return sampleState; } \n"

class CodeEditor extends Component {
  constructor(props) {
    super(props);
    this.state =  {
      html: "hello",
    }
  }
  render() {
    return (
      <div>
        <div
          style={{ color: 'white', background: 'grey' }}
          contentEditable
          onInput={(x,y)=> {
            this.setState({
              html: x.target.innerText
            })
          }}
        />
      </div>
    )
  }
}

CodeEditor.propTypes = {
  style: PropTypes.object,
};

export default CodeEditor;

/*

 getInitialState: function(){
 return {html: "<b>Hello <i>World</i></b>"};
 },

 handleChange: function(evt){
 this.setState({html: evt.target.value});
 },

 render: function(){
 return <ContentEditable
 html={this.state.html} // innerHTML of the editable div
 disabled={false}       // use true to disable edition
 onChange={this.handleChange} // handle innerHTML change
 />
 }
 */