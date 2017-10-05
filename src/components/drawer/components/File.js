import React, { PropTypes } from 'react';

const handleChange = onChange => event => {
  const files = [...event.target.files];
  if (files.length > 0){
    Promise.all(files.map(file => new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (result) => {
        resolve([result, file]);
      };
      reader.readAsBinaryString(file);
    }))).then((binaryData) => {
      const form = new FormData();
      files.forEach(file => {
        form.append(file.name, file);
      });
      onChange(form);
    });
  }
};

const File = ({ onChange }) => (
  <input
    type="file"
    onChange={handleChange(onChange)}
  />
);

File.propTypes = {
  onChange: PropTypes.func,
};

export default File;