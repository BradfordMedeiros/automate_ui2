import React from 'react';
import StyleSheetUploadComponent from '../../../components/menu/components/StyleSheetUpload/StyleSheetUpload';
import WithData from '../../../data/WithData';

const stylesheet = WithData.requests.stylesheet;
const { uploadStylesheet, downloadStylesheet, deleteStylesheet } = stylesheet;

const StyleSheetUpload = ({  open, onRequestClose }) => (
  <StyleSheetUploadComponent
    open={open}
    onRequestClose={onRequestClose}
    onDeleteStyle={deleteStylesheet}
    onDownloadStyle={downloadStylesheet}
    onUploadStyle={styleSheetContent => {
      uploadStylesheet(styleSheetContent);
    }}
  />
);

export default  StyleSheetUpload;