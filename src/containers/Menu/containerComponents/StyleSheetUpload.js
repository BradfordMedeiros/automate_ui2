import React from 'react';
import StyleSheetUploadComponent from '../../../components/menu/components/StyleSheetUpload/StyleSheetUpload';
import WithData from '../../../data/WithData';

const stylesheet = WithData.requests.stylesheet;
const { uploadStylesheet, downloadStylesheet, deleteStylesheet } = stylesheet;

const StyleSheetUpload = ({  open, onRequestClose }) => (
  <StyleSheetUploadComponent
    open={open}
    onRequestClose={onRequestClose}
    onDeleteStyle={async () => {
      await deleteStylesheet();
      window.location.reload();
    }}
    onDownloadStyle={downloadStylesheet}
    onUploadStyle={async styleSheetContent => {
      await uploadStylesheet(styleSheetContent);
      window.location.reload();
    }}
  />
);

export default  StyleSheetUpload;