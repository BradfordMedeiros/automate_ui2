import React, { Component } from 'react';
import uuid from 'uuid';

class CustomOverlay extends Component {
  uuid = uuid();
  componentWillUnmount(){
    window.removeEventListener(`automate_save_content:${this.uuid}`, this.onSaveContent, false);
  }
  onSaveContent = event => {
    if (event.uuid === this.uuid){
      // this is lame, but message event must be global.  We register that in tiles.js
      // and then we reemit that event here
      this.props.saveContent(event.data, this.props.tileKey);
    }
  };
  render() {
    const { tileName, savedContent, isEditing } = this.props;

    const iframeCrossContent = encodeURI(JSON.stringify({
      uuid: this.uuid,
      savedContent,
    }));

    return (
      <iframe
        ref={element => {
          if (element){
            window.addEventListener(`automate_save_content:${this.uuid}`, this.onSaveContent, false);
          }

        }}
        alt="Cannot load custom content"
        src={`http://localhost:9000/${tileName.overlay}?${iframeCrossContent}`}
        allowFullScreen
        style={{ border: '0 none', height: '100%', width: '100%', pointerEvents: isEditing ? 'none' : undefined }}
      />
    )
  }
}

export const overlay = CustomOverlay;