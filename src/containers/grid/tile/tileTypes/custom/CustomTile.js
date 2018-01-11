import React from 'react';
import uuid from 'uuid';

const CustomTile = ({ saveContent, savedContent, url, isEditing }) => {
  const iframeCrossContent = encodeURI(JSON.stringify({
    uuid: uuid(),
    savedContent,
  }));
  console.log('content: ', iframeCrossContent);

  return (
    <iframe
      ref={element => {
        if (element){
          window.addEventListener("message", event => {
            console.log('got message: ', event.data);
            saveContent(event.data, 'manual key here ');

          }, false);
        }

      }}
      alt="Cannot load custom content"
      src={`http://localhost:9000/${url}?${iframeCrossContent}`}
      allowFullScreen
      style={{
        border: '0 none',
        height: '100%',
        width: '100%',
        pointerEvents: isEditing ? 'none' : undefined
      }}
    />
  );
}

export const tile = CustomTile;