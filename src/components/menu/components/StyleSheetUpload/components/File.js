import React, { PropTypes } from 'react';

const handleChange = onChange => event => {
  const files = [...event.target.files];
  if (files.length > 0){
    Promise.all(files.map(file => new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (result) => {
        resolve(result.target.result);
      };
      reader.readAsBinaryString(file);
    }))).then((binaryData) => {
      onChange(binaryData[0]);
    });
  }
};

const File = ({ onChange, style }) => (
  <input
    type="file"
    style={style}
    onChange={handleChange(onChange)}
  />
);

File.propTypes = {
  onChange: PropTypes.func,
};

export default File;
